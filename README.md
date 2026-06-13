# AI Quiz — Trí Tuệ Nhân Tạo | Ôn Thi Cuối Kỳ

Website ôn thi trắc nghiệm **Trí Tuệ Nhân Tạo** – cuối kỳ. Tổng hợp câu hỏi từ các file Word của môn học.

## 🔗 Demo trực tiếp

👉 **[Mở Quiz](https://[username].github.io/ai-quiz)**

## 📚 Nội dung

| Chương | Chủ đề | Số câu |
|--------|--------|--------|
| 1–4 | Tác tử, Tìm kiếm mù (BFS, DFS, UCS, IDS...) | ~40 |
| 1–4 (Ôn tập) | Ôn tập Chương 1–4 | ~43 |
| 5–7 | Tìm kiếm heuristic (A*, Greedy, Leo đồi, Di truyền) | ~39 |
| 8–10 | Logic mệnh đề, CSP (Ràng buộc) | ~35 |

## ✨ Tính năng

- 🎯 **Thi thử** – 40 câu ngẫu nhiên toàn bộ
- ⚡ **Luyện tập theo chương** – phản hồi đáp án ngay
- 📋 **Xem đáp án** – duyệt toàn bộ câu hỏi, lọc theo chương/trạng thái
- 🚩 Đánh dấu câu cần xem lại
- 💾 Lưu lịch sử kết quả vào LocalStorage
- 📱 Responsive – dùng được trên điện thoại

## 🚀 Cách deploy lên GitHub Pages

```bash
# 1. Tạo repo mới hoặc dùng repo hiện tại
git init
git add .
git commit -m "Add AI Quiz website"
git remote add origin https://github.com/[username]/ai-quiz.git
git push -u origin main

# 2. Vào Settings → Pages → Source: Deploy from branch main / (root)
# 3. Truy cập https://[username].github.io/ai-quiz
```

## 📁 Cấu trúc

```
quiz/
├── index.html       # Giao diện chính
├── style.css        # Dark theme premium
├── app.js           # Logic quiz
├── questions.js     # Dữ liệu câu hỏi (tự động sinh)
└── questions.json   # Dữ liệu gốc JSON
```
