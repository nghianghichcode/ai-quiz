import json, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
text = open('questions.js', encoding='utf-8').read()
data_str = text.replace('const QUESTIONS = ', '').strip()
if data_str.endswith(';'): data_str = data_str[:-1]
data = json.loads(data_str)
trac_nghiem = [q for q in data if q.get('chapter') == 'Trắc nghiệm tổng hợp']
print('Trắc nghiệm:', len(trac_nghiem))
for idx, q in enumerate(trac_nghiem):
    print(str(idx) + ': ' + q.get('question')[:60])
