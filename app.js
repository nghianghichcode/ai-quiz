// ===== STATE =====
const STATE = {
  mode: 'practice',       // 'practice' | 'exam'
  chapter: null,
  questions: [],          // current quiz questions
  currentIdx: 0,
  answers: {},            // idx -> letter chosen
  flagged: new Set(),
  submitted: false,
  scores: JSON.parse(localStorage.getItem('ai_quiz_scores') || '[]'),
  chapterProgress: JSON.parse(localStorage.getItem('ai_quiz_progress') || '{}'),
};

// ===== CHAPTERS CONFIG =====
const CHAPTERS_META = {
  'Chương 1-4':          { icon: '🤖', name: 'Chương 1–4: Tác Tử & Tìm Kiếm Mù' },
  'Chương 1-4 (Ôn tập)': { icon: '📚', name: 'Chương 1–4: Ôn Tập' },
  'Chương 5-7':          { icon: '⭐', name: 'Chương 5–7: Tìm Kiếm Heuristic & Cục Bộ' },
  'Chương 8-10':         { icon: '🧩', name: 'Chương 8–10: Logic & Ràng Buộc' },
  'Trắc nghiệm tổng hợp':{ icon: '🔥', name: 'Trắc nghiệm tổng hợp' },
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHome();
});

function initNav() {
  document.getElementById('btn-home').addEventListener('click', () => showPage('home'));
  document.getElementById('btn-practice').addEventListener('click', () => showPage('practice'));
  document.getElementById('btn-exam').addEventListener('click', startFullExam);
  document.getElementById('btn-review').addEventListener('click', () => { buildReviewPage(QUESTIONS, {}); showPage('review'); });
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  const btn = document.getElementById('btn-' + name);
  if (btn) btn.classList.add('active');
  window.scrollTo(0, 0);
}

// ===== HOME =====
function initHome() {
  document.getElementById('stat-total').textContent = QUESTIONS.length;
  updateGlobalProgress();
  buildChapterCards();
  loadRecentScores();
}

function updateGlobalProgress() {
  const answered = Object.keys(STATE.chapterProgress).reduce((s, k) => s + (STATE.chapterProgress[k] || 0), 0);
  document.getElementById('stat-answered').textContent = answered;
}

function buildChapterCards() {
  const grid = document.getElementById('chapters-grid');
  grid.innerHTML = '';

  const grouped = {};
  QUESTIONS.forEach(q => {
    if (!grouped[q.chapter]) grouped[q.chapter] = [];
    grouped[q.chapter].push(q);
  });

  Object.entries(grouped).forEach(([ch, qs]) => {
    const meta = CHAPTERS_META[ch] || { icon: '📖', name: ch };
    const done = STATE.chapterProgress[ch] || 0;
    const pct = Math.round((done / qs.length) * 100);

    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.innerHTML = `
      <div class="cc-icon">${meta.icon}</div>
      <div class="cc-name">${meta.name}</div>
      <div class="cc-count">${qs.length} câu hỏi · ${pct}% hoàn thành</div>
      <div class="cc-progress"><div class="cc-progress-fill" style="width:${pct}%"></div></div>
      <div class="cc-action">→ Luyện tập ngay</div>
    `;
    card.addEventListener('click', () => startChapter(ch, qs));
    grid.appendChild(card);
  });
}

function loadRecentScores() {
  const sec = document.getElementById('scores-section');
  const container = document.getElementById('recent-scores');
  if (!STATE.scores.length) { sec.style.display = 'none'; return; }
  sec.style.display = 'block';
  container.innerHTML = STATE.scores.slice(-5).reverse().map(s => `
    <div class="score-entry">
      <div class="se-pct">${s.pct}%</div>
      <div class="se-info">${s.label} · ${s.correct}/${s.total} đúng</div>
      <div class="se-date">${s.date}</div>
    </div>
  `).join('');
}

// ===== START QUIZ =====
function startChapter(ch, qs) {
  STATE.mode = 'practice';
  STATE.chapter = ch;
  STATE.questions = shuffle([...qs]);
  initQuiz();
}

function startFullExam() {
  STATE.mode = 'exam';
  STATE.chapter = null;
  // pick 40 random from all, weighted across chapters
  STATE.questions = shuffle([...QUESTIONS]).slice(0, Math.min(40, QUESTIONS.length));
  initQuiz();
}

function initQuiz() {
  STATE.currentIdx = 0;
  STATE.answers = {};
  STATE.flagged = new Set();
  STATE.submitted = false;

  // sidebar
  document.getElementById('sidebar-title').textContent = STATE.mode === 'exam' ? '🎯 Thi Thử' : '⚡ Luyện Tập';
  document.getElementById('sidebar-chapter').textContent = STATE.chapter
    ? (CHAPTERS_META[STATE.chapter]?.name || STATE.chapter)
    : 'Tất cả chương · ' + STATE.questions.length + ' câu';
  document.getElementById('nav-total').textContent = STATE.questions.length;

  buildQuestionGrid();
  renderQuestion();
  showPage('quiz');
  document.getElementById('btn-quiz').classList.add('active');
}

function buildQuestionGrid() {
  const grid = document.getElementById('question-grid');
  grid.innerHTML = '';
  STATE.questions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'qg-btn';
    btn.textContent = i + 1;
    btn.id = 'qg-' + i;
    btn.addEventListener('click', () => goTo(i));
    grid.appendChild(btn);
  });
}

// ===== RENDER QUESTION =====
function renderQuestion() {
  const q = STATE.questions[STATE.currentIdx];
  const i = STATE.currentIdx;

  document.getElementById('q-number').textContent = `Câu ${i + 1}`;
  document.getElementById('q-chapter-tag').textContent = q.chapter;
  document.getElementById('nav-current').textContent = i + 1;
  document.getElementById('q-text').textContent = q.question;

  // Image
  const imgContainer = document.getElementById('q-images-container');
  if (q.images && q.images.length > 0) {
    imgContainer.innerHTML = q.images.map(src => `<img src="${src}" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);" />`).join('');
    imgContainer.style.display = 'flex';
  } else {
    imgContainer.style.display = 'none';
    imgContainer.innerHTML = '';
  }

  // flag
  const flagBtn = document.getElementById('q-flag-btn');
  flagBtn.classList.toggle('flagged', STATE.flagged.has(i));

  // options
  const optDiv = document.getElementById('q-options');
  optDiv.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.letter = opt.letter;
    let optHtml = `<div style="display:flex; width: 100%;"><span class="option-letter">${opt.letter.toUpperCase()}</span><span style="flex: 1; text-align: left;">${opt.text}</span></div>`;
    if (opt.images && opt.images.length > 0) {
      optHtml += `<div style="width: 100%; display: flex; flex-direction: column; gap: 8px; align-items: center; margin-top: 8px;">` + 
                 opt.images.map(src => `<img src="${src}" style="max-width: 100%; border-radius: 4px; border: 1px solid var(--border);" />`).join('') +
                 `</div>`;
      btn.style.flexDirection = 'column';
      btn.style.alignItems = 'flex-start';
    }
    btn.innerHTML = optHtml;

    const chosen = STATE.answers[i];
    if (STATE.submitted) {
      btn.classList.add('disabled');
      if (opt.correct) btn.classList.add('correct');
      else if (chosen === opt.letter) btn.classList.add('wrong');
    } else if (STATE.mode === 'practice' && chosen) {
      btn.classList.add('disabled');
      if (opt.correct) btn.classList.add('show-correct');
      if (chosen === opt.letter && !opt.correct) btn.classList.add('wrong');
      if (chosen === opt.letter && opt.correct) btn.classList.add('correct');
    } else {
      if (chosen === opt.letter) btn.classList.add('selected');
      btn.addEventListener('click', () => selectAnswer(opt.letter));
    }
    optDiv.appendChild(btn);
  });

  // explanation in practice mode after answer
  const expDiv = document.getElementById('q-explanation');
  if (STATE.mode === 'practice' && STATE.answers[i]) {
    const isRight = STATE.answers[i] === q.correct;
    const correctOpt = q.options.find(o => o.correct);
    expDiv.style.display = 'block';
    document.getElementById('exp-text').textContent = isRight
      ? '✅ Chính xác! Đây là đáp án đúng.'
      : `❌ Sai rồi! Đáp án đúng là: ${correctOpt ? correctOpt.letter.toUpperCase() + '. ' + correctOpt.text : '(chưa có đáp án)'}`;
  } else {
    expDiv.style.display = 'none';
  }

  // nav buttons
  document.getElementById('btn-prev').disabled = i === 0;
  document.getElementById('btn-next').disabled = i === STATE.questions.length - 1;

  // update progress bar
  const answered = Object.keys(STATE.answers).length;
  const pct = (answered / STATE.questions.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = pct + '%';

  // stats
  updateSidebarStats();
  highlightGridBtn(i);
}

function selectAnswer(letter) {
  const i = STATE.currentIdx;
  if (STATE.submitted || STATE.answers[i]) return;
  STATE.answers[i] = letter;
  renderQuestion();

  // auto-advance in practice mode after short delay
  if (STATE.mode === 'practice') {
    setTimeout(() => {
      if (STATE.currentIdx < STATE.questions.length - 1) navigate(1);
    }, 1200);
  }
}

function navigate(dir) {
  const next = STATE.currentIdx + dir;
  if (next >= 0 && next < STATE.questions.length) {
    STATE.currentIdx = next;
    renderQuestion();
  }
}

function goTo(idx) {
  STATE.currentIdx = idx;
  renderQuestion();
}

function toggleFlag() {
  const i = STATE.currentIdx;
  if (STATE.flagged.has(i)) STATE.flagged.delete(i);
  else STATE.flagged.add(i);
  renderQuestion();
}

function updateSidebarStats() {
  let correct = 0, wrong = 0;
  STATE.questions.forEach((q, i) => {
    const ans = STATE.answers[i];
    if (!ans) return;
    if (ans === q.correct) correct++;
    else wrong++;
  });
  const skip = STATE.questions.length - Object.keys(STATE.answers).length;
  document.getElementById('count-correct').textContent = correct;
  document.getElementById('count-wrong').textContent = wrong;
  document.getElementById('count-skip').textContent = skip;
}

function highlightGridBtn(current) {
  STATE.questions.forEach((q, i) => {
    const btn = document.getElementById('qg-' + i);
    if (!btn) return;
    btn.className = 'qg-btn';
    if (i === current) btn.classList.add('current');
    const ans = STATE.answers[i];
    if (ans) {
      if (ans === q.correct) btn.classList.add('answered-correct');
      else btn.classList.add('answered-wrong');
    }
    if (STATE.flagged.has(i)) btn.classList.add('flagged');
  });
}

// ===== FINISH =====
function finishQuiz() {
  if (!STATE.submitted) {
    const unanswered = STATE.questions.length - Object.keys(STATE.answers).length;
    if (unanswered > 0 && !confirm(`Còn ${unanswered} câu chưa trả lời. Bạn có muốn nộp bài?`)) return;
    STATE.submitted = true;
  }

  let correct = 0, wrong = 0;
  STATE.questions.forEach((q, i) => {
    const ans = STATE.answers[i];
    if (!ans) return;
    if (ans === q.correct) correct++;
    else wrong++;
  });
  const skip = STATE.questions.length - Object.keys(STATE.answers).length;
  const pct = Math.round((correct / STATE.questions.length) * 100);

  // Save score
  const label = STATE.mode === 'exam' ? 'Thi thử' : (STATE.chapter || 'Luyện tập');
  STATE.scores.push({ pct, correct, total: STATE.questions.length, label, date: new Date().toLocaleDateString('vi-VN') });
  localStorage.setItem('ai_quiz_scores', JSON.stringify(STATE.scores.slice(-20)));

  // show result
  document.getElementById('result-emoji').textContent = pct >= 80 ? '🎉' : pct >= 60 ? '😊' : '😅';
  document.getElementById('result-title').textContent = pct >= 80 ? 'Xuất sắc!' : pct >= 60 ? 'Khá tốt!' : 'Cần cố gắng hơn!';
  document.getElementById('result-pct').textContent = pct + '%';
  document.getElementById('result-sub').textContent = `${correct}/${STATE.questions.length}`;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-skip').textContent = skip;
  document.getElementById('result-message').textContent =
    pct >= 80 ? 'Bạn đã nắm vững kiến thức! Tiếp tục duy trì phong độ nhé.' :
    pct >= 60 ? 'Kết quả khá tốt. Hãy ôn lại những câu sai để cải thiện thêm.' :
    'Hãy ôn tập thêm và thử lại. Bạn sẽ làm được!';

  // Animate ring
  const circumference = 339.3;
  const offset = circumference - (pct / 100) * circumference;
  setTimeout(() => {
    document.getElementById('score-ring').style.strokeDashoffset = offset;
  }, 200);

  showPage('result');
}

function reviewAfterExam() {
  buildReviewPage(STATE.questions, STATE.answers);
  showPage('review');
}

function restartQuiz() {
  if (STATE.mode === 'exam') startFullExam();
  else startChapter(STATE.chapter, QUESTIONS.filter(q => q.chapter === STATE.chapter));
}

// ===== REVIEW PAGE =====
function buildReviewPage(questions, answers) {
  // Populate filters
  const chFilter = document.getElementById('review-chapter-filter');
  const chapters = [...new Set(QUESTIONS.map(q => q.chapter))];
  chFilter.innerHTML = '<option value="">Tất cả chương</option>' +
    chapters.map(c => `<option value="${c}">${CHAPTERS_META[c]?.name || c}</option>`).join('');

  renderReviewList(questions, answers);

  // Store for filtering
  window._reviewData = { questions, answers };
}

function filterReview() {
  const d = window._reviewData;
  if (!d) return;
  const ch = document.getElementById('review-chapter-filter').value;
  const status = document.getElementById('review-status-filter').value;
  const search = document.getElementById('review-search').value.toLowerCase();

  let filtered = d.questions;
  if (ch) filtered = filtered.filter(q => q.chapter === ch);
  if (search) filtered = filtered.filter(q => q.question.toLowerCase().includes(search));
  if (status) {
    filtered = filtered.filter((q, i) => {
      const origIdx = d.questions.indexOf(q);
      const ans = d.answers[origIdx];
      if (status === 'correct') return ans && ans === q.correct;
      if (status === 'wrong') return ans && ans !== q.correct;
      if (status === 'unanswered') return !ans;
      return true;
    });
  }
  renderReviewList(filtered, d.answers, d.questions);
}

function renderReviewList(questions, answers, origList) {
  const list = document.getElementById('review-list');
  list.innerHTML = '';

  if (!questions.length) {
    list.innerHTML = '<div style="color:var(--text3);padding:40px;text-align:center">Không tìm thấy câu nào.</div>';
    return;
  }

  questions.forEach((q, displayIdx) => {
    const origIdx = origList ? origList.indexOf(q) : displayIdx;
    const userAns = answers[origIdx];
    let statusClass = 'unanswered', statusLabel = 'Chưa trả lời';
    if (userAns) {
      if (userAns === q.correct) { statusClass = 'correct'; statusLabel = '✓ Đúng'; }
      else { statusClass = 'wrong'; statusLabel = '✗ Sai'; }
    }

    const item = document.createElement('div');
    item.className = 'review-item';
    item.innerHTML = `
      <div class="ri-header">
        <span class="ri-num">Câu ${displayIdx + 1}</span>
        <span class="ri-status ${statusClass}">${statusLabel}</span>
        <span class="ri-chapter">${q.chapter}</span>
      </div>
      <div class="ri-question">${q.question}</div>
      ${q.images && q.images.length > 0 ? `<div style="display:flex; flex-direction:column; gap:8px; align-items:center; margin-bottom:12px;">` + q.images.map(src => `<img src="${src}" style="max-width:100%; border-radius:8px;" />`).join('') + `</div>` : ''}
      <div class="ri-options">
        ${q.options.map(opt => {
          let cls = 'normal';
          if (opt.correct) cls = 'correct-ans';
          else if (userAns === opt.letter) cls = 'user-wrong';
          let optImgHtml = (opt.images && opt.images.length > 0) 
            ? `<div style="display:flex; flex-direction:column; gap:8px; align-items:center; margin-top:8px;">` + opt.images.map(src => `<img src="${src}" style="max-width:100%; border-radius:4px;" />`).join('') + `</div>` 
            : '';
          return `<div class="ri-option ${cls}">
            <strong>${opt.letter.toUpperCase()}.</strong> ${opt.text}
            ${opt.correct ? ' ✓' : ''}
            ${userAns === opt.letter && !opt.correct ? ' ← bạn chọn' : ''}
            ${optImgHtml}
          </div>`;
        }).join('')}
      </div>
    `;
    list.appendChild(item);
  });
}

// ===== UTILS =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// expose for HTML inline handlers
window.showPage = showPage;
window.startFullExam = startFullExam;
window.navigate = navigate;
window.toggleFlag = toggleFlag;
window.finishQuiz = finishQuiz;
window.reviewAfterExam = reviewAfterExam;
window.restartQuiz = restartQuiz;
window.filterReview = filterReview;
