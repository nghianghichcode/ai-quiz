const QUESTIONS = [
  {
    "chapter": "Chương 1-4",
    "question": "Hiện nay nghiên cứu về trí tuệ nhân tạo được tiếp cận theo hướng nào?",
    "options": [
      {
        "letter": "a",
        "text": "Suy nghĩ hợp lý (thinking rationally)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Suy nghĩ như con người (thinking humanly)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Hành động như con người (acting humanly)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Hành động hợp lý (acting rationally",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Mục tiêu truyền thống của trí tuệ nhân tạo KHÔNG nghiên cứu về chủ đề nào?",
    "options": [
      {
        "letter": "a",
        "text": "Thông tin (information)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Kiến thức (knowledge)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Lập kế hoạch (planning)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Lập luận (reasonning)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Môi trường của các thuật toán tìm kiếm TREE-SEARCH và GRAPH-SEARCH được giả sử bao gồm những đặc tính nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát được một phần (partially observable), rời rạc (discrete), được biết trước (known) và xác định (deterministic).",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Quan sát được hoàn toàn (fully observable), rời rạc (discrete), được biết trước (known) và xác định (deterministic).",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Quan sát được hòa toàn (fully observable), rời rạc (discrete), không biết trước (unknown) và xác định (deterministic).",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát được hoàn toàn (fully observable), liên tục (continous), được biết trước (known) và xác định (deterministic).",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Tác tử thực hiện một hành động dựa trên nhận thức hiện tại và tập luật đã được xây dựng gọi là tác tử gì?",
    "options": [
      {
        "letter": "a",
        "text": "Tác tử phản xạ đơn (simple reflex agents)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Tác tử phản xạ dựa trên mô hình (model-based reflex agents)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tác tử dựa trên lợi ích (utility-based agents)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tác tử dựa trên mục tiêu (goal-based agents)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Khi thực hiện thuật toán GRAPH-SEACH để tìm kiếm đường đi trên một đồ thị liên thông có đỉnh đầu khác đỉnh đích, xét trên cây tìm kiếm thì thuật toán dừng khi nào?",
    "options": [
      {
        "letter": "a",
        "text": "Khi nút lá được mở mà đỉnh con của nó là đỉnh đích.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Khi nút trong được mở là đỉnh đích.",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Khi nút gốc được mở là đỉnh đích.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Khi nút lá được mở là đỉnh đích.",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Giả sử b là nhân tố nhánh, m là độ sâu và d là độ sâu tìm được nghiệm của cây tìm kiếm. Thuật toán tìm kiếm nào nào trong các thuật toán sau tìm được nghiệm mà độ phức tạp tính toán thõa mãn điều kiện d = m.",
    "options": [
      {
        "letter": "a",
        "text": "Tìm kiếm từ hai hướng",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Tìm kiếm theo chiều sâu",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Không xảy ra.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tìm kiếm theo chiều rộng",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Giả sử b là nhân tố nhánh, m là độ sâu và d là độ sâu tìm được nghiệm của cây tìm kiếm, độ phức tạp thời gian và độ phức tạp tính toán của thuật toán tìm kiếm theo chiều rộng là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "O(bd) và O(b )",
        "correct": false
      },
      {
        "letter": "b",
        "text": "O(b ) và O(b )",
        "correct": true
      },
      {
        "letter": "c",
        "text": "O(d ) và O(d )",
        "correct": false
      },
      {
        "letter": "d",
        "text": "O(b ) và O(bd)",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Tác tử phản xạ đơn (simple reflex agents) chọn hành động để thưc hiện dựa trên yếu tố nào?",
    "options": [
      {
        "letter": "a",
        "text": "Nhận thức trong quá khứ (perception history)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Mục tiêu hàm (objective function)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Hàm lợi ích (utility function).",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Nhận thức hiện tại (current perception)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc dữ liệu \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G trên đồ thị sau, kết quả của thuật toán là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Không tìm được nghiệm vì đồ thuật toán TREE-SEARCH chỉ áp dụng cho đồ thị có hướng.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Lặp vô hạn",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường đi: S-A-D-G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường đi: S-B-G",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_1.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Môi trường làm việc của một tác tử lái xe tự động KHÔNG có đặc điểm nào sau đây?",
    "options": [
      {
        "letter": "a",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Liên tục (continuous)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát hoàn toàn (fully observable)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Các hệ thống máy tính có khả năng suy nghĩ, lập luận và học tập được gọi là gì ?",
    "options": [
      {
        "letter": "a",
        "text": "Trí thông minh con người (human intelligence)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Máy thông minh (machine intelligence)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Trí tuệ nhân tạo (artificial intelligence)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Trí thông minh ảo (virtual intelligence)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Trí tuệ nhân tạo nghiên cứu về lĩnh vực nào trong các lĩnh vực sau?",
    "options": [
      {
        "letter": "a",
        "text": "Đưa sự thông minh của bạn vào máy tính.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Lập trình với sự thông minh của bạn.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Chơi một trò chơi thông minh trên máy tính.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thiết kế máy thông minh.",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng giải thuật UCS để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, tập các nút và giá của nó của cây tìm kiếm ở độ sâu d = 2 gồm các nút nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(C,9), (D,8),(G,13)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{(C,8), (D,7),(G,13)}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "{(C,8), (D,8),(G,13)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(C,8), (D,7),(G,10)}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_2.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nhiệm vụ của trí tuệ nhân tạo là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Thiết kế một chuổi nhận thức cho tác tử (perception sequence)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thiết kế một kiến trúc tác tử (agent architecture)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thiết kế một hàm tác tử (agent function)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thiết kế một chương trình tác tử (agent program)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán tìm kiếm từ 2 hướng (bidirectional search) để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, thuật toán sẽ tìm được đường đi nào?",
    "options": [
      {
        "letter": "a",
        "text": "S – D – G",
        "correct": true
      },
      {
        "letter": "b",
        "text": "S – B – E – G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – A – C – G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – D – C – G",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_3.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Khi nào thuật toán BFS tìm được đường đi ngắn nhất cho một đồ thị?",
    "options": [
      {
        "letter": "a",
        "text": "Khi đồ thì có chiều dài đường đi trên các cạnh là tương đương.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Khi đồ thị là đồ thị có hướng.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Khi đồ thị có trọng số khác nhau.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Khi đồ thị không có trọng số.",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc \"frontier\" trong thuật toán là LIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì độ sâu tối đa để tìm thấy nghiệm của cây tìm kiếm là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "4",
        "correct": false
      },
      {
        "letter": "b",
        "text": "2",
        "correct": false
      },
      {
        "letter": "c",
        "text": "3",
        "correct": false
      },
      {
        "letter": "d",
        "text": "5",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_4.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán GRAPH-SEARCH với cấu trúc dữ liệu \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì tất cả các nút của cây tìm kiếm ở độ sâu d = 2 gồm những nút nào?",
    "options": [
      {
        "letter": "a",
        "text": "{S,D,I,G}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{C,E,F,I}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "{A,E,F,I}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{S,D,F,G}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_5.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Tác tử phản xạ đơn giản (simple reflex agents) phải hoạt động trong môi trường có đặc tính nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát một phần (partial observation)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Quan sát hoàn toàn (full observation)",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Động (dynamic)",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Đặc tính của môi trường của tác tử trong trò chơi 8 số (8- puzzle) là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát một phần (partially)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Liên tục (continuous)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tĩnh (static)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Tác tử tương tác với môi trường thông qua thành phần nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quá trình học (learning)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Chỉ các thiết bị cảm biến (sensors)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Chỉ các thiết bị hành động (actuators)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Các thiết bị cảm biến (sensors) và thiết bị hoạt động (actuators)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Khi áp dụng thuật toán tìm kiếm theo chiều rộng để tìm đường đi từ một đỉnh đến một đỉnh khác trên một đồ thị, đường nghiệm có tính chất gì?",
    "options": [
      {
        "letter": "a",
        "text": "Đường đi qua ít đỉnh nhất",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đường bất kỳ",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường ngắn nhất",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Đường đi qua nhiều đỉnh nhất",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Trong khoa học máy tính, nghiên cứu trí tuệ nhân tạo được định nghĩa là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Nghiên cứu về cơ sở dữ liệu",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Nghiên cứu về máy tính",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Nghiên cứu về các tác tử thông minh",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Nghiên cứu về lập trình máy tính",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Khi thực hiện thuật toán tìm kiếm GRAPH-SEACH trên một đồ thị, trường hợp nào thuật toán trả về cấu trúc frontier là rỗng (thuật toán không tìm thấy nghiệm)?",
    "options": [
      {
        "letter": "a",
        "text": "Đồ thị có đỉnh ban đầu trùng với đỉnh đích.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đồ thị đầy đủ, tức là một đỉnh sẽ nối được với tất cả các đỉnh còn lại.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đồ thị có một đường đi từ đỉnh bắt đầu đến đỉnh đích.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đỉnh đích của đồ thị là đỉnh treo.",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "nghiệm \"task environment\" của một tác tử KHÔNG bao gồm thành phần nào?",
    "options": [
      {
        "letter": "a",
        "text": "Các thiết bị hoạt động (actuators)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Hiệu quả hoạt động (performance measures)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Kiến trúc tác tử (agent architecture)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Các thiết bị cảm biến (sensors)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Một tác tử hợp lý KHÔNG yêu cầu có khả năng nào?",
    "options": [
      {
        "letter": "a",
        "text": "Tự trị (autonomous)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thu thập thông tin (information gathering)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Toàn năng (omniscience)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Học (learning)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Kiểu của cấu trúc dữ liệu \"frontier\" trong thuật GRAPH-SEARCH là gì để thuật toán tìm được đường đi từ đỉnh S đến đỉnh G trên đồ thị sau là: S-A-D-G?",
    "options": [
      {
        "letter": "a",
        "text": "Không tồn tại kiểu cấu trúc dữ liệu của \"frontier\"",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Priority Queue",
        "correct": false
      },
      {
        "letter": "c",
        "text": "LIFO",
        "correct": true
      },
      {
        "letter": "d",
        "text": "FIFO",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_6.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng giải thuật UCS để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, đường đi tìm được là đường nào và có giá thành là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "S – A – C – D – G: g(G) = 9",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – D – G : g(G) = 8",
        "correct": true
      },
      {
        "letter": "c",
        "text": "S – D – G : g(G) = 7",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Không áp dụng được thuật toán UCS cho đồ thị có hướng.",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_7.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán GRAPH-SEARCH với cấu trúc \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì độ sâu tìm thấy nghiệm của cây tìm kiếm là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "2",
        "correct": true
      },
      {
        "letter": "b",
        "text": "3",
        "correct": false
      },
      {
        "letter": "c",
        "text": "4",
        "correct": false
      },
      {
        "letter": "d",
        "text": "5",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_8.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Hiệu suất của một tác tử có thể được cải thiện bởi quá trình nào?",
    "options": [
      {
        "letter": "a",
        "text": "Học (learning)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Quan sát (observing)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Hành động (acting)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Nhận thức (perceiving)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH để tìm đường đi từ đỉnh S đến đỉnh G trên đồ thị sau, kết quả của thuật toán là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Phụ thuộc vào cấu trúc dữ liệu \"frontier\" là FIFO hay LIFO",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Lặp vô hạn",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường đi: S-B-G lifo",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Đường đi: S-A-D-G fifo",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_9.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Khi áp dụng thuật toán tìm kiếm theo chiều sâu để tìm đường đi từ một đỉnh đến một đỉnh khác trên một đồ thị, đường nghiệm có tính chất gì?",
    "options": [
      {
        "letter": "a",
        "text": "Đường ngắn nhất",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đường bất kỳ",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Đường đi qua nhiều đỉnh nhất",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường đi qua ít đỉnh nhất",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán tìm kiếm chiều sâu với độ sâu tối đa l = 2 cho đồ thị sau, thuật toán có thể tìm được bao nhiêu đường đi khác nhau từ đỉnh A đến đỉnh E?",
    "options": [
      {
        "letter": "a",
        "text": "2",
        "correct": true
      },
      {
        "letter": "b",
        "text": "4",
        "correct": false
      },
      {
        "letter": "c",
        "text": "6",
        "correct": false
      },
      {
        "letter": "d",
        "text": "3",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_10.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì đường đi tìm được là gì?",
    "options": [
      {
        "letter": "a",
        "text": "S – B - E – I – G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – A – C – F – G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – B – E – K - G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – D – F – G",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_11.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Tìm kiếm quay lui là tên gọi khác của thuật toán nào?",
    "options": [
      {
        "letter": "a",
        "text": "IDS",
        "correct": false
      },
      {
        "letter": "b",
        "text": "UCS",
        "correct": false
      },
      {
        "letter": "c",
        "text": "BFS",
        "correct": false
      },
      {
        "letter": "d",
        "text": "DFS",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Cho lưới đường đi như sau, biết rằng tại môi ô có thể đi đến các ô lân cận theo 4 hướng với chiều dài là 1. Nếu áp dụng thuật toán UCS để tìm đường đi từ ô c đến ô c thì cây tìm kiếm ở độ sâu d = 2 sẽ có bao nhiêu nút?",
    "options": [
      {
        "letter": "a",
        "text": "12",
        "correct": false
      },
      {
        "letter": "b",
        "text": "6",
        "correct": false
      },
      {
        "letter": "c",
        "text": "10",
        "correct": false
      },
      {
        "letter": "d",
        "text": "8",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_12.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Nếu áp dụng thuật toán tìm kiếm chiều sâu giới hạn độ sâu l = 2 để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, thuật toán sẽ tìm được đường đi nào?",
    "options": [
      {
        "letter": "a",
        "text": "S – B – E – G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – D – G",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Không tìm được đường đi",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – A – C – G",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_13.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Cho cây tìm kiếm của thuật toán UCS như sau, cấu trúc \"explored set\" của thuật toán UCS sẽ bao gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{ C, D, E}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{S, A, B, C}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "{C}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{S, A, B}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_14.png"
    ]
  },
  {
    "chapter": "Chương 1-4",
    "question": "Không gian trạng thái (state space) của một bài toán tìm kiếm được xác định dựa trên yếu tố nào?",
    "options": [
      {
        "letter": "a",
        "text": "Cách biểu diễn bài toán",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Yêu cầu của bài toán đưa ra.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Mô hình chuyển trạng thái (transition model) của bài toán.",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Tập hành động (actions) của bài toán.",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4",
    "question": "Cho cây tìm kiếm của thuật toán UCS như sau, cấu trúc \"frontier\" của thuật toán UCS sẽ bao gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(S,0), (A,5), (B,6), (C,9)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{(C,8), (D,12), (E,10)}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{(S,0), (A,5), (B,6)}",
        "correct": true
      },
      {
        "letter": "d",
        "text": "{(C,8), (D,12), (E,10), (C,9)}",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_15.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Một tác tử hợp lý KHÔNG yêu cầu có khả năng nào?",
    "options": [
      {
        "letter": "a",
        "text": "Học (learning)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Toàn năng (omniscience)",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Tự trị (autonomous)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thu thập thông tin (information gathering)",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Tác tử phản xạ đơn giản (simple reflex agents) phải hoạt động trong môi trường có đặc tính nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát hoàn toàn (full observation)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát một phần (partial observation)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Tác tử phản xạ dựa trên mô hình phải hoạt động trong môi trường có đặc tính nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát hoàn toàn (full observation)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát một phần (partial observation)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Hiệu suất của một tác tử có thể được cải thiện bởi quá trình nào?",
    "options": [
      {
        "letter": "a",
        "text": "Nhận thức (perceiving)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Học (learning)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Hành động (acting)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát (observing)",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Các hệ thống máy tính có khả năng suy nghĩ, lập luận và học tập được gọi là gì ?",
    "options": [
      {
        "letter": "a",
        "text": "Máy thông minh (machine intelligence)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Trí thông minh con người (human intelligence)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Trí tuệ nhân tạo (artificial intelligence)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Trí thông minh ảo (virtual intelligence)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Trí tuệ nhân tạo nghiên cứu về lĩnh vực nào trong các lĩnh vực sau?",
    "options": [
      {
        "letter": "a",
        "text": "Chơi một trò chơi thông minh trên máy tính.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đưa sự thông minh của bạn vào máy tính.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thiết kế máy thông minh.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Lập trình với sự thông minh của bạn.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Đặc tính của môi trường của tác tử trong trò chơi 8 số (8- puzzle) là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát một phần (partially)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Liên tục (continuous)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tĩnh (static)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Động (dynamic)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Tác tử phản xạ đơn (simple reflex agents) chọn hành động để thưc hiện dựa trên yếu tố nào?",
    "options": [
      {
        "letter": "a",
        "text": "Nhận thức trong quá khứ (perception history)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Mục tiêu hàm (objective function)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Nhận thức hiện tại (current perception)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Hàm lợi ích (utility function).",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Môi trường làm việc của một tác tử lái xe tự động KHÔNG có đặc điểm nào sau đây?",
    "options": [
      {
        "letter": "a",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Quan sát hoàn toàn (fully observable)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Liên tục (continuous)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Môi trường làm việc của một tác tử chuẩn đoán bệnh KHÔNG có đặc điểm nào sau đây?",
    "options": [
      {
        "letter": "a",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Quan sát hoàn toàn (fully observable)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Liên tục (continuous)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Tác tử tương tác với môi trường thông qua thành phần nào?",
    "options": [
      {
        "letter": "a",
        "text": "Chỉ các thiết bị hành động (actuators)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Chỉ các thiết bị cảm biến (sensors)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Các thiết bị cảm biến (sensors) và thiết bị hoạt động (actuators)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Quá trình học (learning)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Hiện nay nghiên cứu về trí tuệ nhân tạo được tiếp cận theo hướng nào?",
    "options": [
      {
        "letter": "a",
        "text": "Hành động hợp lý (acting rationally)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Suy nghĩ như con người (thinking humanly)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Suy nghĩ hợp lý (thinking rationally)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Hành động như con người (acting humanly)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Khái niệm \"task environment\" của một tác tử KHÔNG bao gồm thành phần nào?",
    "options": [
      {
        "letter": "a",
        "text": "Kiến trúc tác tử (agent architecture)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Hiệu quả hoạt động (performance measures)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Các thiết bị cảm biến (sensors)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Các thiết bị hoạt động (actuators)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Tác tử thực hiện một hành động dựa trên nhận thức hiện tại và tập luật đã được xây dựng gọi là tác tử gì?",
    "options": [
      {
        "letter": "a",
        "text": "Tác tử phản xạ đơn (simple reflex agents)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Tác tử dựa trên lợi ích (utility-based agents)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tác tử dựa trên mục tiêu (goal-based agents)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tác tử phản xạ dựa trên mô hình (model-based reflex agents)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nhiệm vụ của trí tuệ nhân tạo là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Thiết kế một kiến trúc tác tử (agent architecture)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thiết kế một hàm tác tử (agent function)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thiết kế một chương trình tác tử (agent program)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thiết kế một chuổi nhận thức cho tác tử (perception sequence)",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Khi thực hiện thuật toán tìm kiếm GRAPH-SEACH trên một đồ thị, trường hợp nào thuật toán trả về cấu trúc frontier là rỗng (thuật toán không tìm thấy nghiệm)?",
    "options": [
      {
        "letter": "a",
        "text": "Đỉnh đích của đồ thị là đỉnh treo.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Đồ thị có một đường đi từ đỉnh bắt đầu đến đỉnh đích.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đồ thị đầy đủ, tức là một đỉnh sẽ nối được với tất cả các đỉnh còn lại.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đồ thị có đỉnh ban đầu trùng với đỉnh đích.",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH để tìm đường đi từ đỉnh S đến đỉnh G trên đồ thị sau, kết quả của thuật toán là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Đường đi S-B-G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Phụ thuộc vào cấu trúc dữ liệu \"frontier\" là FIFO hay LIFO",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Lặp vô hạn",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường đi S-A-D-G",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_16.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Mục tiêu truyền thống của trí tuệ nhân tạo KHÔNG nghiên cứu về chủ đề nào?",
    "options": [
      {
        "letter": "a",
        "text": "Kiến thức (knowledge)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thông tin (information)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Lập luận (reasonning)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Lập kế hoạch (planning)",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì đường đi tìm được là gì?",
    "options": [
      {
        "letter": "a",
        "text": "S – A – C – F – G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – B – E – K - G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – D – F – G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – B - E – I – G",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_17.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Không gian trạng thái (state space) của một bài toán tìm kiếm được xác định dựa trên yếu tố nào?",
    "options": [
      {
        "letter": "a",
        "text": "Tập hành động (actions) của bài toán.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Mô hình chuyển trạng thái (transition model) của bài toán.",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Cách biểu diễn bài toán",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Yêu cầu của bài toán đưa ra.",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Môi trường của các thuật toán tìm kiếm TREE-SEARCH và GRAPH-SEARCH được giả sử bao gồm những đặc tính nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát được hòa toàn (fully observable), rời rạc (discrete), không biết trước (unknown) và xác định (deterministic).",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Quan sát được một phần (partially observable), rời rạc (discrete), được biết trước (known) và xác định (deterministic).",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Quan sát được hoàn toàn (fully observable), rời rạc (discrete), được biết trước (known) và xác định (deterministic).",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát được hoàn toàn (fully observable), liên tục (continous), được biết trước (known) và xác định (deterministic).",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán GRAPH-SEARCH với cấu trúc dữ liệu \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì tất cả các nút của cây tìm kiếm ở độ sâu d = 2 gồm những nút nào?",
    "options": [
      {
        "letter": "a",
        "text": "{S,D,I,G}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{C,E,F,I}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{S,D,F,G}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{A,E,F,I}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_18.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán GRAPH-SEARCH với cấu trúc \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì độ sâu tìm thấy nghiệm của cây tìm kiếm là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "2",
        "correct": false
      },
      {
        "letter": "b",
        "text": "4",
        "correct": false
      },
      {
        "letter": "c",
        "text": "3",
        "correct": false
      },
      {
        "letter": "d",
        "text": "5",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_19.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Kiểu của cấu trúc dữ liệu \"frontier\" trong thuật GRAPH-SEARCH là gì để thuật toán tìm được đường đi từ đỉnh S đến đỉnh G trên đồ thị sau là S-A-D-G?",
    "options": [
      {
        "letter": "a",
        "text": "LIFO",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Priority Queue",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Không tồn tại kiểu cấu trúc dữ liệu của \"frontier\"",
        "correct": false
      },
      {
        "letter": "d",
        "text": "FIFO",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_20.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc \"frontier\" trong thuật toán là LIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì độ sâu tối đa để tìm thấy nghiệm của cây tìm kiếm là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "5",
        "correct": false
      },
      {
        "letter": "b",
        "text": "2",
        "correct": false
      },
      {
        "letter": "c",
        "text": "4",
        "correct": false
      },
      {
        "letter": "d",
        "text": "3",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_21.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Trong khoa học máy tính, nghiên cứu trí tuệ nhân tạo được định nghĩa là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Nghiên cứu về máy tính",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Nghiên cứu về cơ sở dữ liệu",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Nghiên cứu về lập trình máy tính",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Nghiên cứu về các tác tử thông minh",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc dữ liệu \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G trên đồ thị sau, kết quả của thuật toán là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Lặp vô hạn",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Không tìm được nghiệm vì đồ thuật toán TREE-SEARCH chỉ áp dụng cho đồ thị có hướng.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường đi S-A-D-G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường đi S-B-G",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_22.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Giả sử b là nhân tố nhánh, m là độ sâu và d là độ sâu tìm được nghiệm của cây tìm kiếm, độ phức tạp thời gian và độ phức tạp tính toán của thuật toán tìm kiếm theo chiều rộng là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "O(bd) và O(bm)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "O(bd ) và O(bd )",
        "correct": false
      },
      {
        "letter": "c",
        "text": "O(db) và O(db)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "O(bm) và O(bd)",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Khi áp dụng thuật toán tìm kiếm theo chiều rộng để tìm đường đi từ một đỉnh đến một đỉnh khác trên một đồ thị, đường nghiệm có tính chất gì?",
    "options": [
      {
        "letter": "a",
        "text": "Đường ngắn nhất",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Đường bất kỳ",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường đi qua ít đỉnh nhất",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường đi qua nhiều đỉnh nhất",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Khi thực hiện thuật toán GRAPH-SEACH để tìm kiếm đường đi trên một đồ thị liên thông có đỉnh đầu khác đỉnh đích, xét trên cây tìm kiếm thì thuật toán dừng khi nào?",
    "options": [
      {
        "letter": "a",
        "text": "Khi nút trong được mở là đỉnh đích.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Khi nút lá được mở mà đỉnh con của nó là đỉnh đích.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Khi nút gốc được mở là đỉnh đích.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Khi nút lá được mở là đỉnh đích.",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Giả sử b là nhân tố nhánh, m là độ sâu và d là độ sâu tìm được nghiệm của cây tìm kiếm. Thuật toán tìm kiếm nào nào trong các thuật toán sau tìm được nghiệm mà độ phức tạp tính toán thõa mãn điều kiện d = m.",
    "options": [
      {
        "letter": "a",
        "text": "Không xảy ra.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Tìm kiếm từ hai hướng",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tìm kiếm theo chiều sâu",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tìm kiếm theo chiều rộng",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Khi áp dụng thuật toán tìm kiếm theo chiều sâu để tìm đường đi từ một đỉnh đến một đỉnh khác trên một đồ thị, đường nghiệm có tính chất gì?",
    "options": [
      {
        "letter": "a",
        "text": "Đường đi qua ít đỉnh nhất",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đường bất kỳ",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Đường đi qua nhiều đỉnh nhất",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường ngắn nhất",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán tìm kiếm chiều sâu với độ sâu tối đa l = 2 cho đồ thị sau, thuật toán có thể tìm được bao nhiêu đường đi khác nhau từ đỉnh A đến đỉnh E?",
    "options": [
      {
        "letter": "a",
        "text": "2",
        "correct": false
      },
      {
        "letter": "b",
        "text": "4",
        "correct": false
      },
      {
        "letter": "c",
        "text": "3",
        "correct": false
      },
      {
        "letter": "d",
        "text": "6",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_23.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Khi nào thuật toán BFS tìm được đường đi ngắn nhất cho một đồ thị?",
    "options": [
      {
        "letter": "a",
        "text": "Khi đồ thị có trọng số khác nhau.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Khi đồ thị là đồ thị có hướng.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Khi đồ thị không có trọng số.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Khi đồ thì có chiều dài đường đi trên các cạnh là tương đương.",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán tìm kiếm chiều sâu giới hạn độ sâu l = 2 để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, thuật toán sẽ tìm được đường đi nào?",
    "options": [
      {
        "letter": "a",
        "text": "S – D – G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – A – C – G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – B – E – G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Không tìm được đường đi",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_24.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Giả sử b là nhân tố nhánh, m là độ sâu và d là độ sâu tìm được nghiệm của cây tìm kiếm, độ phức tạp thời gian và độ phức tạp tính toán của thuật toán tìm kiếm theo chiều sâu là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "O(bd) và O(bm)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "O(bd ) và O(bd )",
        "correct": false
      },
      {
        "letter": "c",
        "text": "O(db) và O(db)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "O(bm) và O(bm)",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Cho cây tìm kiếm của thuật toán UCS như sau, cấu trúc \"explored set\" của thuật toán UCS sẽ bao gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{ C, D, E}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{S, A, B, C}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{S, A, B}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{C}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_25.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng giải thuật UCS để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, đường đi tìm được là đường nào và có giá thành là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "Không áp dụng được thuật toán UCS cho đồ thị có hướng.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – D – G  g(G) = 8",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – A – C – D – G g(G) = 9",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – D – G  g(G) = 7",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_26.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Cho cây tìm kiếm của thuật toán UCS như sau, cấu trúc \"frontier\" của thuật toán UCS sẽ bao gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(S,0), (A,5), (B,6)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{(C,8), (D,12), (E,10)}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{(S,0), (A,5), (B,6), (C,9)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(C,8), (D,12), (E,10), (C,9)}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_27.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng giải thuật UCS để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, tập các nút và giá của nó của cây tìm kiếm ở độ sâu d = 2 gồm các nút nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(C,8), (D,7),(G,13)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{(C,9), (D,8),(G,13)}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{(C,8), (D,8),(G,13)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(C,8), (D,7),(G,10)}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_28.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Cho lưới đường đi như sau, biết rằng tại môi ô có thể đi đến các ô lân cận theo 4 hướng với chiều dài là 1. Nếu áp dụng thuật toán UCS để tìm đường đi từ ô c13 đến ô c25 thì cây tìm kiếm ở độ sâu d = 2 sẽ có bao nhiêu nút?",
    "options": [
      {
        "letter": "a",
        "text": "8",
        "correct": false
      },
      {
        "letter": "b",
        "text": "10 Một tác tử hợp lý KHÔNG yêu cầu có khả năng nào?",
        "correct": false
      },
      {
        "letter": "c",
        "text": "12",
        "correct": false
      },
      {
        "letter": "d",
        "text": "6",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_29.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Nếu áp dụng thuật toán tìm kiếm từ 2 hướng (bidirectional search) để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, thuật toán sẽ tìm được đường đi nào?",
    "options": [
      {
        "letter": "a",
        "text": "S – A – C – G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – D – G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – D – C – G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – B – E – G",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_30.png"
    ]
  },
  {
    "chapter": "Chương 1-4 (Ôn tập)",
    "question": "Tìm kiếm quay lui là tên gọi khác của thuật toán nào?",
    "options": [
      {
        "letter": "a",
        "text": "IDS",
        "correct": false
      },
      {
        "letter": "b",
        "text": "UCS",
        "correct": false
      },
      {
        "letter": "c",
        "text": "BFS",
        "correct": false
      },
      {
        "letter": "d",
        "text": "DFS",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 5-7",
    "question": "Khái niệm nào sau đây KHÔNG được sử dụng trong giải thuật di truyền? Chọn một:",
    "options": [
      {
        "letter": "a",
        "text": "Thế hệ (generation)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Quần thể (population)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Cá thể (individual)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Làng giềng (neighbours)",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đình được ghi trên các cạnh. Ở vòng lặp thứ 2, cấu trúc \"frontier\" của thuật toán A* gồm những đình nào?",
    "options": [
      {
        "letter": "a",
        "text": "(A,14), (D, 12), (G, 15)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "(A,14), (B,15), (C,11), (G,12)",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_31.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giả để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Hàm heuristic của đỉnh nào vi phạm tính chấp nhận được?",
    "options": [
      {
        "letter": "a",
        "text": "C",
        "correct": false
      },
      {
        "letter": "b",
        "text": "A",
        "correct": false
      },
      {
        "letter": "c",
        "text": "D",
        "correct": false
      },
      {
        "letter": "d",
        "text": "B",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_32.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Giả sử có cây tìm kiếm như sau và trạng thái tìm kiếm hiện thời là trạng thái B, khi đó thuật toán tìm kiếm leo đồi sẽ tìm kiếm một trạng thái tiếp theo trong tập các trạng thái nào?",
    "options": [
      {
        "letter": "a",
        "text": "{D, E, F}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{A,C}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "(A, C, D, E, F}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{S, D, E, F)",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_33.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Hàm heuristic của đỉnh nào vi phạm tỉnh đồng nhất?",
    "options": [
      {
        "letter": "a",
        "text": "C",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_34.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giả để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Nếu áp dụng giải thuật A* để tìm đường đi từ đỉnh S đến đỉnh G, hàm đánh giá f(E) bằng bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "f(E) = 17",
        "correct": false
      },
      {
        "letter": "b",
        "text": "f(E) = 13",
        "correct": false
      },
      {
        "letter": "c",
        "text": "f(E) = 18",
        "correct": false
      },
      {
        "letter": "d",
        "text": "f(E) = 14",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_35.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Để tìm đường đi ngắn nhất từ đỉnh S đến đỉnh G của một đồ thị, nếu cây tìm kiếm của thuật toán tìm kiếm Beam với k = 2 được xây dựng như sau, trong đó ký hiệu h là hàm heuristic ước lượng khoảng cách đến đích thì những nút nào tiếp theo của cây sẽ được chọn để mở rộng cây?",
    "options": [
      {
        "letter": "a",
        "text": "{F,H)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{C,H}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{C,E}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{E,F}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_36.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Để tìm đường đi ngắn nhất từ đỉnh S đến đỉnh G của một đồ thị, nếu cây tìm kiếm của thuật toán leo đồi được xây dựng như sau, trong đó ký hiệu h là hàm heuristic ước lượng khoảng cách đến đích thì nút nào của cây bị SAI?",
    "options": [
      {
        "letter": "a",
        "text": "C",
        "correct": false
      },
      {
        "letter": "b",
        "text": "B",
        "correct": false
      },
      {
        "letter": "c",
        "text": "D",
        "correct": false
      },
      {
        "letter": "d",
        "text": "A",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_37.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Trong thuật toán A*, hàm f(n) = g(n) + h(n). Khẳng định nào sau đây là sai?",
    "options": [
      {
        "letter": "a",
        "text": "g(n) là chi phí thực tế từ trạng thái đầu đến trạng thái n.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "f(n) là ước lượng chi phí từ trạng thái đầu đến trạng thái đích đi qua trạng thái n.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "h(n) là chi phí thực tế từ trạng thái n đến trạng thái đích.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "h(n) là ước lượng chi phí từ trạng thái n đến trạng thái đích.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho cây tìm kiếm của thuật toán A* như sau, cấu trúc \"frontier\" của thuật toán A* sẽ bao gồm những đình nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(C,12), (D,9). (Ε,8)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "((S,12), (A,5), (Β,7)}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{(C,12), (D,6), (Ε,8)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(C,12), (D,6), (D,9), (E,8))",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_38.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Thuật toán tìm kiếm A* là thuật toán thuộc loại nào trong các loại sau?",
    "options": [
      {
        "letter": "a",
        "text": "Tìm kiếm mù (blind search)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Tìm kiếm không có thông tin bổ sung (uninformed search)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tìm kiếm có thông tin bổ sung (informed search)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Tim kiếm tuyến tỉnh (linear search)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 5-7",
    "question": "Thuật toán nào trong các thuật toán sau đây KHÔNG phải là thuật toán tìm kiếm cục bộ?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán di truyền (genetic algorithm)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán leo đồi (hill-climbing search)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thuật toán tìm kiếm với giá cực tiểu (uniform cost search)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Thuật toán mô phỏng luyện kim (simulated annealing)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 5-7",
    "question": "Trong mỗi vòng lặp của giải thuật di truyền, thứ tự các toán tử sẽ được thực hiện như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "Chon lọc, lai ghép và đột biến.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Lai ghép, chọn lọc và đột biến",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Lai ghép, đột biến và chọn lọc.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Chọn lọc, đột biến và lai ghép.",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Chương 5-7",
    "question": "Trong thuật toán A*, gọi h*(n) là giá thực tế từ trạng thái n đến trạng thái đích, khi đó một hàm heuristic h(n) là chấp nhận được nếu điều kiện nào sau đây là đúng?",
    "options": [
      {
        "letter": "a",
        "text": "h(n) ≥ h*(n) với mọi nút n.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Giải thuật A* không tìm được đường đi ngắn nhất từ đỉnh S đến đỉnh G vì sao?",
    "options": [
      {
        "letter": "a",
        "text": "Đỉnh A vi phạm tỉnh đồng nhất",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đỉnh E vi phạm tính đồng nhất",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đình C vi phạm tính đồng nhất",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đình D vi phạm tỉnh đồng nhất",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_39.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Nếu áp dụng thuật toán leo đồi cho hàm số với đồ thị sau, phát biểu nào sau đây là SAI?",
    "options": [
      {
        "letter": "a",
        "text": "Xuất phát từ đình D, nghiệm tìm được là đỉnh F.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Xuất phát từ đỉnh E, nghiệm tìm được là đỉnh F.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xuất phát từ đình G, nghiệm tìm được là đỉnh F.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Xuất phát từ đỉnh C, nghiệm tìm được là đình B.",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_40.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Nếu áp dụng thuật toán leo đồi (hill-climbing search) để tìm giá trị lớn nhất cho hàm số f(x) có đồ thị như sau với x nguyên và 0 <= x <= 30 phát biểu nào sau đây là đúng?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán không tìm được giá trị lớn nhất của hàm số f(x)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán luôn tìm được giá trị lớn nhất của hàm số f(x) .",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thuật toán tìm được giá trị lớn nhất của hàm f(x) phụ thuộc vào điểm xuất phát ban đầu.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Không gian tìm kiếm tối đa của thuật toán là 0 <= x <= 30",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_41.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Thuật toán tìm kiếm leo đồi (hill-climbing) tìm được đường đi nào từ đỉnh S đến đỉnh G?\na.S-A-C-E-G\nb.S-A-D-G",
    "options": [
      {
        "letter": "c",
        "text": "S-B-E-G",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_42.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Nếu áp dụng thuật toán leo đồi khởi tạo lại ngẫu nhiên (random-restart hill climbing) để tìm được giá trị lớn nhất cho hàm số với đồ thị sau, thuật toán có thể khởi tạo tại tập những đình nào?",
    "options": [
      {
        "letter": "a",
        "text": "{D,H}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{A,H}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{D,F}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{E,G}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_43.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Trong thuật toán weighted A*, hàm đánh giá f(n) = g(n) + W*h(n). Nếu W = ∞, thì thuật toán weighted A* trở thành thuật toán nào sau đây?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán tìm kiếm với giá cực tiểu (UCS)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán tìm kiếm theo chiều sâu.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thuật toán tìm kiếm tham lam (greedy best first search)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Thuật toán tìm kiếm theo chiều rộng",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đình được ghi trên các cạnh. Ở vòng lặp thứ 2, cấu trúc \"explored\" của thuật toán A* gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{S,B}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{S,A,B)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{S,D}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{S.A}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_44.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Trong giải thuật di truyền, giả sử có 2 cá thể với gen được biểu diễn bởi dãy bịt nhị phân như sau: x = 10011, y = 01010. Nếu lai ghép cá thể x và y với điểm cắt c = 2, thì giải thuật sinh ra một cá thể con z có gen như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "z = 10010",
        "correct": false
      },
      {
        "letter": "b",
        "text": "z = 1001",
        "correct": false
      },
      {
        "letter": "c",
        "text": "z = 10011",
        "correct": false
      },
      {
        "letter": "d",
        "text": "z = 01110",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Hàm heuristic của đỉnh nào vi phạm tính đồng nhất?",
    "options": [
      {
        "letter": "a",
        "text": "D",
        "correct": false
      },
      {
        "letter": "b",
        "text": "C",
        "correct": false
      },
      {
        "letter": "c",
        "text": "A",
        "correct": false
      },
      {
        "letter": "d",
        "text": "B",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_45.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Nếu áp dụng thuật toán leo đồi cho hàm số với đồ thị sau, phát biểu nào sau đây là đúng?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán chỉ tìm được giá trị hàm f(x) tại đỉnh B.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán chỉ tìm được giá trị hàm f(x) tại đỉnh C.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thuật toán tìm được giá trị của hàm f(x) phụ thuộc vào điểm xuất phát.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thuật toán luôn tìm được giá trị lớn nhất của hàm f(x) tại đình A.",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_46.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Thuật toán nào sau đây là thuật toán tìm kiếm cục bộ?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán tìm kiếm theo chiều rộng",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán leo đồi (hill-climbing search)",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Thuật toán tìm kiếm theo chiều sâu",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thuật toán tìm kiếm với giá cực tiểu (uniform cost search)",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Thuật toán tìm kiếm tham lam (greedy search) tìm được đường đi nào để đi từ đỉnh S đến đình G?\na.S-D-G\nb.S-B-G",
    "options": [
      {
        "letter": "c",
        "text": "S-A-D-G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S-A-C-G",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_47.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Một bài toán thõa mãn ràng buộc được định nghĩa gồm bộ 3 (X,D,C), phát biểu nào sau đây là SAI?",
    "options": [
      {
        "letter": "a",
        "text": "C = {C1, C2,..., Ct) là tập các ràng buộc của các biến.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "X = {X1, X2, ..., Xn} là một tập hữu hạn các biến",
        "correct": false
      },
      {
        "letter": "c",
        "text": "(C11 C21... 1Cn} là tập các ràng buộc của các biến.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "D = {D1, D2, ..., Dn} là một tập hữu hạn miền giá trị của các biến với Di là miền giá trị của biến Xi.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán tô màu bản đồ như sau, trong đó vùng Vi có miền giá trị Di (i = 1,2,..6). Nếu áp dụng thuật toán tìm kiếm quay lui kết hợp kiểm tra tiến với thứ tự động thì vùng nào được chọn làm vùng bắt đầu?",
    "options": [
      {
        "letter": "a",
        "text": "V4",
        "correct": false
      },
      {
        "letter": "b",
        "text": "V1",
        "correct": false
      },
      {
        "letter": "c",
        "text": "V6",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V3",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_48.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán thõa mãn ràng buộc (X,D,C), trong đó X = (x1, x2, x3), D = {D1, D2, D3} với D1 = {1, 2, 3}, D2 = {1, 2, 3} D3 = {2, 3} và C = {x1 > x2, x2 # x3, x2+ x3 > 4}. Phép gán nào sau đây là nghiệm của bài toán?",
    "options": [
      {
        "letter": "a",
        "text": "x1 = 1, x2 = 2 , x3 = 3",
        "correct": false
      },
      {
        "letter": "b",
        "text": "x1 = 3, x2 = 1 , x3 = 2",
        "correct": false
      },
      {
        "letter": "c",
        "text": "x1 = 3, x2 = 2 , x3 = 2",
        "correct": false
      },
      {
        "letter": "d",
        "text": "x1 = 3, x2 = 2 , x3 = 3",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán tô màu có bản đồ được biểu diễn bằng đồ thị sau, trong đó đình V1 có miền giá trị D1, đỉnh V2 có miền giá trị D2 và đỉnh V3 có miền giá trị D3. Thuật toán AC3 sẽ cho kết quả tô màu như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "V1 = {R} , V2 = {R}, V3 = {G}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Không tìm được nghiệm",
        "correct": false
      },
      {
        "letter": "c",
        "text": "V1 = {B} , V2 = {R}, V3 = {G}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V1 = {G}, V2 = {G}, V3 = {G}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_49.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán thõa mãn ràng buộc (X,D,C), trong đó X = (x1, x2, x3), D = {D1, D2, D3} với D1 = {2,4,5,7), D2 = {3,5,6,8), D3 = {1,5,6,7) và C = {x1 = x2, x2 = x3}. Để đạt được thõa mãn ràng buộc trên cạnh x1 - x3, cần xóa các giá trị nào?",
    "options": [
      {
        "letter": "a",
        "text": "Xóa {2} trong D1.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Xóa {1,6} trong D3.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xóa (5,7} trong D1.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Xóa (2,4) trong D1.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán thõa mãn ràng buộc (X,D,C), trong đó X = (x1, x2, x3), D = {D1, D2, D3} với D1 = {1,2,3,4}, D2= {1,2,3}, D3 = (2,3) và C = {x1 > 2, x2 # x3, x1 + x2+ x3 > 4}. Ràng buộc nào trong tập C là ràng buộc đơn biến?",
    "options": [
      {
        "letter": "a",
        "text": "x2 + x3",
        "correct": false
      },
      {
        "letter": "b",
        "text": "x1 + x2+ x3 > 4",
        "correct": false
      },
      {
        "letter": "c",
        "text": "x1 > 2",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Không có ràng buộc đơn biến.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán tô màu bản đồ như sau, trong đó vùng Vi có miền giá trị Di (i = 1, 2, 3, 4) . Nếu áp dụng thuật toán tìm kiếm quay lui kết hợp với kiểm tra tiến với V2 được gán là {R} thì các miền còn lại có giá trị như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "D1 = {G} , D3 = {G} , D4 = {G, B}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "D1 = {G, B} , D3 = {G}, D4 = {G, B}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "D1 = {B} D3 = {G} , D4 = {G, B}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "D1 = {R, G, B} , D3 = {R, G} , D4 = {G, B}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_50.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán tô màu có bản đồ (V,D,C) được biểu diễn bằng đồ thị sau, trong đó V = {V1,V2, V3}, D = {D1,D2,D3} và C = {V1 # V2, V2 # V3, V3 ≠ V1}. Nếu áp dụng thuật toán min-conflicts với phép gán current = {G,R,G} thì những biến nào là biến xung đột?",
    "options": [
      {
        "letter": "a",
        "text": "V1 và V2",
        "correct": false
      },
      {
        "letter": "b",
        "text": "V1 và V3",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Không có biến xung đột",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V2 và V3",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_51.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán tô màu có bản đồ được biểu diễn bằng đồ thị sau, trong đó đỉnh V1 có miền giá trị D1, đình V2 có miền giá trị D2 và đình V3 có miền giá trị D3. Để đạt được thõa mãn ràng buộc trên cạnh V1 - V2, cần xóa giá trị nào?",
    "options": [
      {
        "letter": "a",
        "text": "Xóa B trong miền D1",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Xóa R trong miền D1",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xóa G trong miền D1",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Xóa R trong miền D2",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_52.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán thõa mãn ràng buộc (X,D,C), trong đó X = (x1, x2, x3}, D = {D1, D2, D3} với D1 = {2,4,5,6), D2 = {3,5,6,8), D3 = {2,5,6,7) và C = {x1 = x2, x2 = x3}. Để đạt được thỏa mãn ràng buộc trên cạnh x1 - x2, cần xóa các giá trị nào?",
    "options": [
      {
        "letter": "a",
        "text": "Xóa {2} trong D1.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Xóa {2,4} trong D1.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xóa (5,6} trong D1.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Xóa (3,8} trong D2.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Cho bài toán tô màu có bản đồ được biểu diễn bằng đồ thị sau, trong đó đỉnh V1 có miền giá trị D1, đỉnh V2 có miền giá trị D2 và đình V3 có miền giá trị D3. Thuật toán AC3 sẽ cho kết quả tô màu như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "V1 = {B}, V2 = {G}, V3 = {R}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "V1 = {B}, V2 ={R}, V3 = {G}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Không tìm được nghiệm.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V1 = {G}, V2 = {G}, V3 = {R}",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_53.png"
    ]
  },
  {
    "chapter": "Chương 5-7",
    "question": "Trong mỗi vòng lặp của thuật toán min-conflicts, giá trị được chọn để gán cho một biến đã được chọn là:",
    "options": [
      {
        "letter": "a",
        "text": "Giá trị có xung đột lớn nhất.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Giá trị ngẫu nhiên trong tập giá trị của biến.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Giá trị có xung đột nhỏ nhất.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Giá trị không có xung đột với các biến khác.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 5-7",
    "question": "Trong mỗi vòng lặp của thuật toán min-conflicts, một biến được chọn là:",
    "options": [
      {
        "letter": "a",
        "text": "Biến không có xung đột với các biến khác.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Biến có giá trị đang được gán có xung đột nhiều nhất.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Biến ngẫu nhiên trong tập các biến.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Biến xung đột với các biến khác.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử p và q là 2 biến logic mệnh đề, khi đó câu ￢(p => q) có giá trị đúng khi nào?",
    "options": [
      {
        "letter": "a",
        "text": "p = true, q = true",
        "correct": false
      },
      {
        "letter": "b",
        "text": "p = false, q = false",
        "correct": false
      },
      {
        "letter": "c",
        "text": "p = false, q = true",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p = true, q = false",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử p và q là các biến mệnh đề, câu nào trong các câu sau tương đương với câu ￢(p ∧ q) ?",
    "options": [
      {
        "letter": "a",
        "text": "p => q",
        "correct": false
      },
      {
        "letter": "b",
        "text": "￢p ∨ ￢q",
        "correct": false
      },
      {
        "letter": "c",
        "text": "￢p ∧ ￢q",
        "correct": false
      },
      {
        "letter": "d",
        "text": "￢p ∨ q",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử p và q là 2 biến logic mệnh đề, khi đó câu p => q có giá trị sai khi nào?",
    "options": [
      {
        "letter": "a",
        "text": "p = true, q = true",
        "correct": false
      },
      {
        "letter": "b",
        "text": "p = false, q = true",
        "correct": false
      },
      {
        "letter": "c",
        "text": "p = false, q = false",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p = true, q = false",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử p, q và s là các biến mệnh đề, câu nào trong các câu sau tương đương với câu p => (q ∨ s) ?",
    "options": [
      {
        "letter": "a",
        "text": "￢p ∨ q ∨ s",
        "correct": false
      },
      {
        "letter": "b",
        "text": "￢p ∧ q ∨ s",
        "correct": false
      },
      {
        "letter": "c",
        "text": "￢p ∨ q ∧ s",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p ∨ q ∨ s",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử p và q là các biến mệnh đề, câu nào trong các câu sau là không thõa mãn được (unsatisfiable)?",
    "options": [
      {
        "letter": "a",
        "text": "p ∨ q",
        "correct": false
      },
      {
        "letter": "b",
        "text": "p ∧ q",
        "correct": false
      },
      {
        "letter": "c",
        "text": "p => q",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p ∧ ￢p",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho sơ sở tri thức KB = {p ∨ q; ￢q ∨ r}, trong đó p, q và r là các biến mệnh đề. Câu nào trong các câu sau được suy diễn từ KB?",
    "options": [
      {
        "letter": "a",
        "text": "￢p ∨ ￢r",
        "correct": false
      },
      {
        "letter": "b",
        "text": "p ∨ r",
        "correct": false
      },
      {
        "letter": "c",
        "text": "￢p ∨ r",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p ∧ ￢r",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho p, q và r là các biến mệnh đề, mệnh đề nào sau đây là mệnh đề xác định?",
    "options": [
      {
        "letter": "a",
        "text": "p ∨ q ∨ r",
        "correct": false
      },
      {
        "letter": "b",
        "text": "p ∨ q ∨ ￢r",
        "correct": false
      },
      {
        "letter": "c",
        "text": "p ∧ ￢q ∧ ￢r",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p ∨ ￢q ∨ ￢r",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử p và q là các biến mệnh đề, câu nào trong các câu sau tương đương với câu (p => q) ?",
    "options": [
      {
        "letter": "a",
        "text": "￢p ∧ q",
        "correct": false
      },
      {
        "letter": "b",
        "text": "p ∧ ￢q",
        "correct": false
      },
      {
        "letter": "c",
        "text": "p ∨ ￢q",
        "correct": false
      },
      {
        "letter": "d",
        "text": "￢p ∨ q",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử p và q là các biến mệnh đề, câu nào trong các câu sau tương đương với câu (p => q) ?",
    "options": [
      {
        "letter": "a",
        "text": "￢q => ￢p",
        "correct": false
      },
      {
        "letter": "b",
        "text": "￢p ∧ q",
        "correct": false
      },
      {
        "letter": "c",
        "text": "p ∧ ￢q",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p ∨ ￢q",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Giả sử có ký hiệu các mệnh đề: p = \" We will go swimming\" và q = \"We will take a canoe trip\". Khi đó câu \"If we do not go swimming then we will take a canoe trip.\" được biểu diễn như thế nào ?",
    "options": [
      {
        "letter": "a",
        "text": "￢p => q",
        "correct": false
      },
      {
        "letter": "b",
        "text": "￢q => p",
        "correct": false
      },
      {
        "letter": "c",
        "text": "q => p",
        "correct": false
      },
      {
        "letter": "d",
        "text": "p => q",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho sơ sở tri thức KB = {p ∧ q; q => (s ∨ t); s => r; ￢t}, trong đó p, q, r, s và t là các biến mệnh đề. Câu nào trong các câu sau được suy diễn từ KB?",
    "options": [
      {
        "letter": "a",
        "text": "￢s",
        "correct": false
      },
      {
        "letter": "b",
        "text": "T",
        "correct": false
      },
      {
        "letter": "c",
        "text": "￢r",
        "correct": false
      },
      {
        "letter": "d",
        "text": "r",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho sơ sở tri thức KB = {p ∧ q; p => (r ∧ s); r => t}, trong đó p, q, r, s và t là các biến mệnh đề. Câu nào trong các câu sau cho giá trị là false?",
    "options": [
      {
        "letter": "a",
        "text": "￢p ∨ ￢q",
        "correct": false
      },
      {
        "letter": "b",
        "text": "r ∨ ￢s",
        "correct": false
      },
      {
        "letter": "c",
        "text": "s ∨ ￢t",
        "correct": false
      },
      {
        "letter": "d",
        "text": "￢s ∨ t",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho sơ sở tri thức KB = {p ∧ q; p => r; (q ∨ r) => s}, trong đó p, q, r và s là các biến mệnh đề. Câu nào trong các câu sau được suy diễn từ KB?",
    "options": [
      {
        "letter": "a",
        "text": "s",
        "correct": false
      },
      {
        "letter": "b",
        "text": "￢r",
        "correct": false
      },
      {
        "letter": "c",
        "text": "￢p",
        "correct": false
      },
      {
        "letter": "d",
        "text": "￢s",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Ký hiệu M(r) là tập tất cả các mô hình của câu: r = p ∧ q với p và q là 2 biến logic mệnh đề. Khi đó:",
    "options": [
      {
        "letter": "a",
        "text": "M(r) = {(p = true, q = false)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "M(r) = {(p = false, q = true)}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "M(r) = {(p = true, q = true)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "M(r) = {(p = false, q = false)}",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Một cơ sở tri thức của một tác tử logic được định nghĩa là:",
    "options": [
      {
        "letter": "a",
        "text": "Một tập các câu trong một ngôn ngữ hình thức.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Một tập các ký hiệu trong một ngôn ngữ hình thức.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Một văn bản.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Một tập các số nguyên.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Câu trả lời nào sau đây là SAI?",
    "options": [
      {
        "letter": "a",
        "text": "Dữ liệu cho các thuật toán học máy là các véc-tơ đặc trưng của các mẫu dữ liệu. b. Các thuật toán học máy yêu cầu biết trước mô hình của dữ liệu.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Các phương pháp đánh giá mô hình học máy yêu cầu chia tập dữ liệu thành tập dữ liệu huấn luyện (training data) và tập dữ liệu đánh giá (validation data)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Dữ liệu huấn luyện cho các thuật toán học máy cần phải tiền xử lý.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho tập dữ liệu D = {(x ,y ), 1≤ i ≤ n}, trong đó x là véc-tơ dữ liệu vào (input) và y là dữ liệu ra (output). Bài toán phân lớp yêu cầu:",
    "options": [
      {
        "letter": "a",
        "text": "Dữ liệu ra y có thể là liên tục hoặc rời rạc",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Dữ liệu ra y là rời rạc",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Không có ràng buộc dữ liệu ra y",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Dữ liệu ra y là liên tục",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Gán nhãn dữ liệu huấn luyện là một yêu cầu của loại học máy nào?",
    "options": [
      {
        "letter": "a",
        "text": "Học tăng cường",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Học có giám sát hay có hướng dẫn",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Học không có giám sát hay không có hướng dẫn",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Học bán giám sát",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Loại học máy nào yêu cầu cần phải biết dữ liệu đầu vào và dữ liệu đầu ra?",
    "options": [
      {
        "letter": "a",
        "text": "Học tăng cường",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Học không có hướng dẫn",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Học có hướng dẫn",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Suy diễn logic",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Học máy là một lĩnh vực con của lĩnh vực nghiên cứu nào?",
    "options": [
      {
        "letter": "a",
        "text": "Trí tuệ nhân tạo",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Học sâu",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Nhận dạng mẫu",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Suy diễn logic",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho tập dữ liệu D = {(x ,y ), 1≤ i ≤ n}, trong đó x là véc-tơ dữ liệu vào (input) và y là dữ liệu ra (output). Bài toán hồi quy yêu cầu:",
    "options": [
      {
        "letter": "a",
        "text": "Dữ liệu ra y có thể là liên tục hoặc rời rạc",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Dữ liệu ra y là rời rạc",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Dữ liệu ra y là liên tục",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Không có ràng buộc dữ liệu ra y",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Loại học máy nào tìm mối quan hệ của các mẫu khi tập dữ liệu không biết đầu ra?",
    "options": [
      {
        "letter": "a",
        "text": "Suy diễn logic",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Học tăng cường",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Học có hướng dẫn",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Học không có hướng dẫn",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Thứ tự các bước thực hiện cơ bản của một hệ thống nhận dạng ảnh vân tay sẽ như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "Tiền xử lý -> trích chọn đặc trưng -> nhận dạng.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Nhận dạng -> trích chọn đặc trưng -> tiền xử lý",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Trích chọn đặc trưng -> tiền xử lý -> nhận dạng.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tiền xử lý -> nhận dạng -> trích chọn đặc trưng",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Các thuật toán học máy xây dựng mô hình dữ liệu dựa trên tập dữ liệu nào?",
    "options": [
      {
        "letter": "a",
        "text": "Tập dữ liệu đánh giá (validation data)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Tập dữ liệu huấn luyện (training data)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tập dữ liệu kiểm tra (test data)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Không cần dữ liệu",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Quá trình các thuật toán học máy xây dựng mô hình dựa trên các mẫu dữ liệu gọi là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Huấn luyện (training)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Kiểm tra (test) mô hình",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tiền xử lý (preprocessing) dữ liệu",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đánh giá (validation) mô hình",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Thứ tự các bước cơ bản để xây dựng một hệ thống nhận dạng ảnh vân tay sẽ như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "Thu thập dữ liệu -> huấn luyện -> trích chọn đặc trưng -> nhận dạng.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thu thập dữ liệu -> nhận dạng -> huấn luyện -> trích chọn đặc trưng.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thu thập dữ liệu -> trích chọn đặc trưng -> huấn luyện -> nhận dạng.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thu thập dữ liệu -> huấn luyện -> nhận dạng -> trích chọn đặc trưng.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho mạng nơ-ron như sau, trong đó f là hàm hardlim. Nếu đầu vào của mạng p = [-1,1]T thì đầu ra của mạng a = [a1 ,a2 ] bằng bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "a = [1,1]T",
        "correct": false
      },
      {
        "letter": "b",
        "text": "a = [1,0]T",
        "correct": false
      },
      {
        "letter": "c",
        "text": "a = [0,1]T",
        "correct": false
      },
      {
        "letter": "d",
        "text": "a = [0,0]T",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_54.png"
    ]
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho mạng nơ-ron như sau, trong đó f là hàm hardlim. Nếu đầu vào của mạng p = [-1,1] thì đầu ra của mạng a = [a1 ,a2 ] bằng bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "a = [1,1]T",
        "correct": false
      },
      {
        "letter": "b",
        "text": "a = [0,0]T",
        "correct": false
      },
      {
        "letter": "c",
        "text": "a = [0,1]T",
        "correct": false
      },
      {
        "letter": "d",
        "text": "a = [1,0]T",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_55.png"
    ]
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho mạng nơ-ron như sau, trong đó f là hàm hardlim. Nếu đầu vào của mạng p = [1,1] thì đầu+ ra của mạng a = [a1 ,a2 ] bằng bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "a = [0,0]T",
        "correct": false
      },
      {
        "letter": "b",
        "text": "a = [1,1]T",
        "correct": false
      },
      {
        "letter": "c",
        "text": "a = [1,0]T",
        "correct": false
      },
      {
        "letter": "d",
        "text": "a = [0,1]T",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_56.png"
    ]
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho mạng nơ-ron như sau, trong đó f là hàm hardlim. Nếu đầu vào của mạng p = [1,1] thì đầu ra của mạng a = [a1 ,a2 ] bằng bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "a = [1,0]T",
        "correct": false
      },
      {
        "letter": "b",
        "text": "a = [0,1]T",
        "correct": false
      },
      {
        "letter": "c",
        "text": "a = [1,1]T",
        "correct": false
      },
      {
        "letter": "d",
        "text": "a = [0,0]T",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_57.png"
    ]
  },
  {
    "chapter": "Chương 8-10",
    "question": "Thứ tự các bước thực hiện cơ bản của một hệ thống nhận dạng ảnh biển số Ôtô sẽ như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "Tiền xử lý -> phân đoạn -> nhận dạng.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Tiền xử lý -> trích chọn đặc trưng -> phân đoạn -> nhận dạng.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tiền xử lý -> trích chọn đặc trưng -> nhận dạng.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tiền xử lý -> phân đoạn -> trích chọn đặc trưng -> nhận dạng.",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Bao nhiêu dòng xuất hiện trong bảng chân lý để xác định giá trị của câu: (p ∧ q) => (p ∨ q)?\na. 8",
    "options": [
      {
        "letter": "b",
        "text": "16",
        "correct": false
      },
      {
        "letter": "d",
        "text": "4",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Bài toán hồi quy là bài toán thuộc loại học máy nào?\na. Học bán giám sát\nb. Học có giám sát hay có hướng dẫn",
    "options": [
      {
        "letter": "c",
        "text": "Học tăng cường",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho sơ sở tri thức KB = {p ∧ q; p => r; r => ￢s ∨ t; ￢q ∨ s}, trong đó p, q, r, s và t là các biến mệnh đề. Câu nào trong các câu sau được suy diễn từ KB?",
    "options": [
      {
        "letter": "a",
        "text": "t",
        "correct": false
      }
    ],
    "correct": null
  },
  {
    "chapter": "Chương 8-10",
    "question": "Cho mạng nơ-ron như sau, trong đó f là hàm hardlim. Nếu đầu vào của mạng p = [1,-1] thì đầu ra của mạng a = [a1 ,a2 ] bằng bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "a = [1,0]T",
        "correct": false
      },
      {
        "letter": "b",
        "text": "a = [0,1]T",
        "correct": false
      },
      {
        "letter": "c",
        "text": "a = [1,1]T",
        "correct": false
      },
      {
        "letter": "d",
        "text": "a = [0,0]T",
        "correct": false
      }
    ],
    "correct": null,
    "images": [
      "assets/img_58.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Hiện nay nghiên cứu về trí tuệ nhân tạo được tiếp cận theo hướng nào?",
    "options": [
      {
        "letter": "a",
        "text": "Suy nghĩ hợp lý (thinking rationally)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Suy nghĩ như con người (thinking humanly)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Hành động như con người (acting humanly)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Hành động hợp lý (acting rationally",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Mục tiêu truyền thống của trí tuệ nhân tạo KHÔNG nghiên cứu về chủ đề nào?",
    "options": [
      {
        "letter": "a",
        "text": "Thông tin (information)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Kiến thức (knowledge)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Lập kế hoạch (planning)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Lập luận (reasonning)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Môi trường của các thuật toán tìm kiếm TREE-SEARCH và GRAPH-SEARCH được giả sử bao gồm những đặc tính nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát được một phần (partially observable), rời rạc (discrete), được biết trước (known) và xác định (deterministic).",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Quan sát được hoàn toàn (fully observable), rời rạc (discrete), được biết trước (known) và xác định (deterministic).",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Quan sát được hòa toàn (fully observable), rời rạc (discrete), không biết trước (unknown) và xác định (deterministic).",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát được hoàn toàn (fully observable), liên tục (continous), được biết trước (known) và xác định (deterministic).",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Tác tử thực hiện một hành động dựa trên nhận thức hiện tại và tập luật đã được xây dựng gọi là tác tử gì?",
    "options": [
      {
        "letter": "a",
        "text": "Tác tử phản xạ đơn (simple reflex agents)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Tác tử phản xạ dựa trên mô hình (model-based reflex agents)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Tác tử dựa trên lợi ích (utility-based agents)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tác tử dựa trên mục tiêu (goal-based agents)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Khi thực hiện thuật toán GRAPH-SEACH để tìm kiếm đường đi trên một đồ thị liên thông có đỉnh đầu khác đỉnh đích, xét trên cây tìm kiếm thì thuật toán dừng khi nào?",
    "options": [
      {
        "letter": "a",
        "text": "Khi nút lá được mở mà đỉnh con của nó là đỉnh đích.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Khi nút trong được mở là đỉnh đích.",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Khi nút gốc được mở là đỉnh đích.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Khi nút lá được mở là đỉnh đích.",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Giả sử b là nhân tố nhánh, m là độ sâu và d là độ sâu tìm được nghiệm của cây tìm kiếm. Thuật toán tìm kiếm nào nào trong các thuật toán sau tìm được nghiệm mà độ phức tạp tính toán thõa mãn điều kiện d = m.",
    "options": [
      {
        "letter": "a",
        "text": "Tìm kiếm từ hai hướng",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Tìm kiếm theo chiều sâu",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Không xảy ra.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tìm kiếm theo chiều rộng",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Giả sử b là nhân tố nhánh, m là độ sâu và d là độ sâu tìm được nghiệm của cây tìm kiếm, độ phức tạp thời gian và độ phức tạp tính toán của thuật toán tìm kiếm theo chiều rộng là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "O(bd) và O(b )",
        "correct": false
      },
      {
        "letter": "b",
        "text": "O(bm) và O(bm)",
        "correct": true
      },
      {
        "letter": "c",
        "text": "O(d ) và O(d )",
        "correct": false
      },
      {
        "letter": "d",
        "text": "O(b ) và O(bd)",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Tác tử phản xạ đơn (simple reflex agents) chọn hành động để thưc hiện dựa trên yếu tố nào?",
    "options": [
      {
        "letter": "a",
        "text": "Nhận thức trong quá khứ (perception history)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Mục tiêu hàm (objective function)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Hàm lợi ích (utility function).",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Nhận thức hiện tại (current perception)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc dữ liệu \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G trên đồ thị sau, kết quả của thuật toán là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Không tìm được nghiệm vì đồ thuật toán TREE-SEARCH chỉ áp dụng cho đồ thị có hướng.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Lặp vô hạn",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường đi: S-A-D-G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường đi: S-B-G",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_59.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Môi trường làm việc của một tác tử lái xe tự động KHÔNG có đặc điểm nào sau đây?",
    "options": [
      {
        "letter": "a",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Liên tục (continuous)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quan sát hoàn toàn (fully observable)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Các hệ thống máy tính có khả năng suy nghĩ, lập luận và học tập được gọi là gì ?",
    "options": [
      {
        "letter": "a",
        "text": "Trí thông minh con người (human intelligence)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Máy thông minh (machine intelligence)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Trí tuệ nhân tạo (artificial intelligence)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Trí thông minh ảo (virtual intelligence)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trí tuệ nhân tạo nghiên cứu về lĩnh vực nào trong các lĩnh vực sau?",
    "options": [
      {
        "letter": "a",
        "text": "Đưa sự thông minh của bạn vào máy tính.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Lập trình với sự thông minh của bạn.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Chơi một trò chơi thông minh trên máy tính.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thiết kế máy thông minh.",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng giải thuật UCS để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, tập các nút và giá của nó của cây tìm kiếm ở độ sâu d = 2 gồm các nút nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(C,9), (D,8),(G,13)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{(C,8), (D,7),(G,13)}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "{(C,8), (D,8),(G,13)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(C,8), (D,7),(G,10)}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_60.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nhiệm vụ của trí tuệ nhân tạo là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Thiết kế một chuổi nhận thức cho tác tử (perception sequence)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thiết kế một kiến trúc tác tử (agent architecture)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thiết kế một hàm tác tử (agent function)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thiết kế một chương trình tác tử (agent program)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán tìm kiếm từ 2 hướng (bidirectional search) để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, thuật toán sẽ tìm được đường đi nào?",
    "options": [
      {
        "letter": "a",
        "text": "S – D – G",
        "correct": true
      },
      {
        "letter": "b",
        "text": "S – B – E – G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – A – C – G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – D – C – G",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_61.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Khi nào thuật toán BFS tìm được đường đi ngắn nhất cho một đồ thị?",
    "options": [
      {
        "letter": "a",
        "text": "Khi đồ thì có chiều dài đường đi trên các cạnh là tương đương.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Khi đồ thị là đồ thị có hướng.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Khi đồ thị có trọng số khác nhau.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Khi đồ thị không có trọng số.",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc \"frontier\" trong thuật toán là LIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì độ sâu tối đa để tìm thấy nghiệm của cây tìm kiếm là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "4",
        "correct": false
      },
      {
        "letter": "b",
        "text": "2",
        "correct": false
      },
      {
        "letter": "c",
        "text": "3",
        "correct": false
      },
      {
        "letter": "d",
        "text": "5",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_62.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán GRAPH-SEARCH với cấu trúc dữ liệu \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì tất cả các nút của cây tìm kiếm ở độ sâu d = 2 gồm những nút nào?",
    "options": [
      {
        "letter": "a",
        "text": "{S,D,I,G}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{C,E,F,I}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "{A,E,F,I}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{S,D,F,G}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_63.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Tác tử phản xạ đơn giản (simple reflex agents) phải hoạt động trong môi trường có đặc tính nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát một phần (partial observation)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Quan sát hoàn toàn (full observation)",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Ngẫu nhiên (stochastic)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Động (dynamic)",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Đặc tính của môi trường của tác tử trong trò chơi 8 số (8- puzzle) là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Quan sát một phần (partially)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Động (dynamic)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Liên tục (continuous)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tĩnh (static)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Tác tử tương tác với môi trường thông qua thành phần nào?",
    "options": [
      {
        "letter": "a",
        "text": "Quá trình học (learning)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Chỉ các thiết bị cảm biến (sensors)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Chỉ các thiết bị hành động (actuators)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Các thiết bị cảm biến (sensors) và thiết bị hoạt động (actuators)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Khi áp dụng thuật toán tìm kiếm theo chiều rộng để tìm đường đi từ một đỉnh đến một đỉnh khác trên một đồ thị, đường nghiệm có tính chất gì?",
    "options": [
      {
        "letter": "a",
        "text": "Đường đi qua ít đỉnh nhất",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đường bất kỳ",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường ngắn nhất",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Đường đi qua nhiều đỉnh nhất",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong khoa học máy tính, nghiên cứu trí tuệ nhân tạo được định nghĩa là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Nghiên cứu về cơ sở dữ liệu",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Nghiên cứu về máy tính",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Nghiên cứu về các tác tử thông minh",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Nghiên cứu về lập trình máy tính",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Khi thực hiện thuật toán tìm kiếm GRAPH-SEACH trên một đồ thị, trường hợp nào thuật toán trả về cấu trúc frontier là rỗng (thuật toán không tìm thấy nghiệm)?",
    "options": [
      {
        "letter": "a",
        "text": "Đồ thị có đỉnh ban đầu trùng với đỉnh đích.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đồ thị đầy đủ, tức là một đỉnh sẽ nối được với tất cả các đỉnh còn lại.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đồ thị có một đường đi từ đỉnh bắt đầu đến đỉnh đích.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đỉnh đích của đồ thị là đỉnh treo.",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "nghiệm \"task environment\" của một tác tử KHÔNG bao gồm thành phần nào?",
    "options": [
      {
        "letter": "a",
        "text": "Các thiết bị hoạt động (actuators)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Hiệu quả hoạt động (performance measures)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Kiến trúc tác tử (agent architecture)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Các thiết bị cảm biến (sensors)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Một tác tử hợp lý KHÔNG yêu cầu có khả năng nào?",
    "options": [
      {
        "letter": "a",
        "text": "Tự trị (autonomous)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thu thập thông tin (information gathering)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Toàn năng (omniscience)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Học (learning)",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Kiểu của cấu trúc dữ liệu \"frontier\" trong thuật GRAPH-SEARCH là gì để thuật toán tìm được đường đi từ đỉnh S đến đỉnh G trên đồ thị sau là: S-A-D-G?",
    "options": [
      {
        "letter": "a",
        "text": "Không tồn tại kiểu cấu trúc dữ liệu của \"frontier\"",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Priority Queue",
        "correct": false
      },
      {
        "letter": "c",
        "text": "LIFO",
        "correct": true
      },
      {
        "letter": "d",
        "text": "FIFO",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_64.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng giải thuật UCS để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, đường đi tìm được là đường nào và có giá thành là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "S – A – C – D – G: g(G) = 9",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – D – G : g(G) = 8",
        "correct": true
      },
      {
        "letter": "c",
        "text": "S – D – G : g(G) = 7",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Không áp dụng được thuật toán UCS cho đồ thị có hướng.",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_65.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán GRAPH-SEARCH với cấu trúc \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì độ sâu tìm thấy nghiệm của cây tìm kiếm là bao nhiêu?",
    "options": [
      {
        "letter": "a",
        "text": "2",
        "correct": true
      },
      {
        "letter": "b",
        "text": "3",
        "correct": false
      },
      {
        "letter": "c",
        "text": "4",
        "correct": false
      },
      {
        "letter": "d",
        "text": "5",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_66.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Hiệu suất của một tác tử có thể được cải thiện bởi quá trình nào?",
    "options": [
      {
        "letter": "a",
        "text": "Học (learning)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Quan sát (observing)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Hành động (acting)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Nhận thức (perceiving)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH để tìm đường đi từ đỉnh S đến đỉnh G trên đồ thị sau, kết quả của thuật toán là gì?",
    "options": [
      {
        "letter": "a",
        "text": "Phụ thuộc vào cấu trúc dữ liệu \"frontier\" là FIFO hay LIFO",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Lặp vô hạn",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Đường đi: S-B-G lifo",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Đường đi: S-A-D-G fifo",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_67.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Khi áp dụng thuật toán tìm kiếm theo chiều sâu để tìm đường đi từ một đỉnh đến một đỉnh khác trên một đồ thị, đường nghiệm có tính chất gì?",
    "options": [
      {
        "letter": "a",
        "text": "Đường ngắn nhất",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đường bất kỳ",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Đường đi qua nhiều đỉnh nhất",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đường đi qua ít đỉnh nhất",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán tìm kiếm chiều sâu với độ sâu tối đa l = 2 cho đồ thị sau, thuật toán có thể tìm được bao nhiêu đường đi khác nhau từ đỉnh A đến đỉnh E?",
    "options": [
      {
        "letter": "a",
        "text": "2",
        "correct": true
      },
      {
        "letter": "b",
        "text": "4",
        "correct": false
      },
      {
        "letter": "c",
        "text": "6",
        "correct": false
      },
      {
        "letter": "d",
        "text": "3",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_68.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán TREE-SEARCH với cấu trúc \"frontier\" trong thuật toán là FIFO để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau thì đường đi tìm được là gì?",
    "options": [
      {
        "letter": "a",
        "text": "S – B - E – I – G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – A – C – F – G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – B – E – K - G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – D – F – G",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_69.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Tìm kiếm quay lui là tên gọi khác của thuật toán nào?",
    "options": [
      {
        "letter": "a",
        "text": "IDS",
        "correct": false
      },
      {
        "letter": "b",
        "text": "UCS",
        "correct": false
      },
      {
        "letter": "c",
        "text": "BFS",
        "correct": false
      },
      {
        "letter": "d",
        "text": "DFS",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho lưới đường đi như sau, biết rằng tại môi ô có thể đi đến các ô lân cận theo 4 hướng với chiều dài là 1. Nếu áp dụng thuật toán UCS để tìm đường đi từ ô c đến ô c thì cây tìm kiếm ở độ sâu d = 2 sẽ có bao nhiêu nút?",
    "options": [
      {
        "letter": "a",
        "text": "12",
        "correct": false
      },
      {
        "letter": "b",
        "text": "6",
        "correct": false
      },
      {
        "letter": "c",
        "text": "10",
        "correct": false
      },
      {
        "letter": "d",
        "text": "8",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_70.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán tìm kiếm chiều sâu giới hạn độ sâu l = 2 để tìm đường đi từ đỉnh S đến đỉnh G cho đồ thị sau, thuật toán sẽ tìm được đường đi nào?",
    "options": [
      {
        "letter": "a",
        "text": "S – B – E – G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – D – G",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Không tìm được đường đi",
        "correct": false
      },
      {
        "letter": "d",
        "text": "S – A – C – G",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_71.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho cây tìm kiếm của thuật toán UCS như sau, cấu trúc \"explored set\" của thuật toán UCS sẽ bao gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{ C, D, E}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{S, A, B, C}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{C}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{S, A, B}",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_72.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Không gian trạng thái (state space) của một bài toán tìm kiếm được xác định dựa trên yếu tố nào?",
    "options": [
      {
        "letter": "a",
        "text": "Cách biểu diễn bài toán",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Yêu cầu của bài toán đưa ra.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Mô hình chuyển trạng thái (transition model) của bài toán.",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Tập hành động (actions) của bài toán.",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho cây tìm kiếm của thuật toán UCS như sau, cấu trúc \"frontier\" của thuật toán UCS sẽ bao gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(S,0), (A,5), (B,6), (C,9)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{(C,8), (D,12), (E,10)}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "{(S,0), (A,5), (B,6)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(C,8), (D,12), (E,10), (C,9)}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_73.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong mỗi vòng lặp của giải thuật di truyền, thứ tự các toán tử sẽ được thực hiện như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "Chọn lọc, đột biến và lai ghép.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Lai ghép, chọn lọc và đột biến",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Chọn lọc, lai ghép và đột biến.",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Lai ghép, đột biến và chọn lọc",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán leo đồi cho hàm số với đồ thị sau, phát biểu nào sau đây là SAI?",
    "options": [
      {
        "letter": "a",
        "text": "Xuất phát từ đỉnh G, nghiệm tìm được là đỉnh F.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Xuất phát từ đỉnh E, nghiệm tìm được là đỉnh F.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xuất phát từ đinh D, nghiệm tìm được là đỉnh F.",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Xuất phát từ đỉnh C, nghiệm tìm được là đỉnh B.",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_74.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Thuật toán nào sau đây là thuật toán tìm kiếm cục bộ?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán tìm kiếm với giá cực tiểu (uniform cost search)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán leo đồi (hill-climbing search)",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Thuật toán tìm kiếm theo chiều rộng",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thuật toán tìm kiếm theo chiều sâu",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán thõa mãn ràng buộc (X,D,C), trong đó X = {x1, x2, x3}, D = {D1, D2, D3} với D1 = {1,2,3,4}, D2 = {1,2,3}, D3 = {2,3} và C = {x1 > 2, x2 ≠ x3, x1 + x2+ x3 > 4}. Ràng buộc nào trong tập C là ràng buộc đơn biến?",
    "options": [
      {
        "letter": "a",
        "text": "x1 > 2",
        "correct": true
      },
      {
        "letter": "b",
        "text": "x1 + x2+ x3 > 4",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Không có ràng buộc đơn biến.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "x2 ≠ x3",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán tô màu có bản đồ được biểu diễn bằng đồ thị sau, trong đó đỉnh V1 có miền giá trị D1, đỉnh V2 có miền giá trị D2 và đỉnh V3 có miền giá trị D3. Thuật toán AC3 sẽ cho kết quả tô màu như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "V1 = {G}, V2 = {G}, V3 = {R}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "V1 = {B}, V2 = {R}, V3 = {G}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Không tìm được nghiệm.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V1 = {B}, V2 = {G}, V3 = {R}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_75.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán tô màu có bản đồ được biểu diễn bằng đồ thị sau, trong đó đỉnh V1 có miền giá trị D1, đỉnh V2 có miền giá trị D2 và đỉnh V3 có miền giá trị D3. Thuật toán AC3 sẽ cho kết quả tô màu như thế nào?",
    "options": [
      {
        "letter": "a",
        "text": "V1 = {B}, V2 = {R}, V3 = {G}",
        "correct": true
      },
      {
        "letter": "b",
        "text": "V1 = {G}, V2 = {G}, V3 = {G}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Không tìm được nghiệm",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V1 = {R}, V2 = {R}, V3 = {G}",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_76.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Khái niệm nào sau đây KHÔNG được sử dụng trong giải thuật di truyền?",
    "options": [
      {
        "letter": "a",
        "text": "Láng giềng (neighbours)",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Thế hệ (generation)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Cá thể (individual)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Quần thể (population)",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong mỗi vòng lặp của thuật toán min-conflicts, giá trị được chọn để gán cho một biến đã được chọn là:",
    "options": [
      {
        "letter": "a",
        "text": "Giá trị có xung đột lớn nhất.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Giá trị không có xung đột với các biến khác.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Giá trị có xung đột nhỏ nhất.",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Giá trị ngẫu nhiên trong tập giá trị của biến.",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Hàm heuristic của đỉnh nào vi phạm tính đồng nhất?",
    "options": [
      {
        "letter": "a",
        "text": "A",
        "correct": true
      },
      {
        "letter": "b",
        "text": "B",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S",
        "correct": false
      },
      {
        "letter": "d",
        "text": "C",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_77.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Giải thuật A* không tìm được đường đi ngắn nhất từ đỉnh S đến đỉnh G vì sao?",
    "options": [
      {
        "letter": "a",
        "text": "Đỉnh D vi phạm tính đồng nhất",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Đỉnh C vi phạm tính đồng nhất",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Đỉnh E vi phạm tính đồng nhất",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Đỉnh A vi phạm tính đồng nhất",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_78.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Giả sử có cây tìm kiếm như sau và trạng thái tìm kiếm hiện thời là trạng thái B, khi đó thuật toán tìm kiếm leo đồi sẽ tìm kiếm một trạng thái tiếp theo trong tập các trạng thái nào?",
    "options": [
      {
        "letter": "a",
        "text": "{A, C, D, E, F}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{S, D, E, F}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{A,C}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{D, E, F}",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_79.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho cây tìm kiếm của thuật toán A* như sau, cấu trúc \"frontier\" của thuật toán A* sẽ bao gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(S,12), (A,5), (B,7)}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{(C,12), (D,6), (E,8)}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{(C,12), (D,6), (D,9), (E,8)}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(C,12), (D,9). (E,8)}",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_80.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Thuật toán tìm kiếm A* là thuật toán thuộc loại nào trong các loại sau?",
    "options": [
      {
        "letter": "a",
        "text": "Tìm kiếm tuyến tính (linear search)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Tìm kiếm có thông tin bổ sung (informed search)",
        "correct": true
      },
      {
        "letter": "c",
        "text": "Tìm kiếm không có thông tin bổ sung (uninformed search)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Tìm kiếm mù (blind search)",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán leo đồi khởi tạo lại ngẫu nhiên (random-restart hill climbing) để tìm được giá trị lớn nhất cho hàm số với đồ thị sau, thuật toán có thể khởi tạo tại tập những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{A,H}",
        "correct": true
      },
      {
        "letter": "b",
        "text": "{E,G}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{D,H}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{D,F}",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_81.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán tô màu có bản đồ được biểu diễn bằng đồ thị sau, trong đó đỉnh V1 có miền giá trị D1, đỉnh V2 có miền giá trị D2 và đỉnh V3 có miền giá trị D3. Để đạt được thõa mãn ràng buộc trên cạnh V1-V2, cần xóa giá trị nào?",
    "options": [
      {
        "letter": "a",
        "text": "Xóa B trong miền D1",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Xóa R trong miền D2",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xóa G trong miền D1",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Xóa R trong miền D1",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_82.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán tô màu bản đồ như sau, trong đó vùng Vi có miền giá trị Di (i = 1,2,..6). Nếu áp dụng thuật toán tìm kiếm quay lui kết hợp kiểm tra tiến với thứ tự động thì vùng nào được chọn làm vùng bắt đầu?",
    "options": [
      {
        "letter": "a",
        "text": "V4",
        "correct": false
      },
      {
        "letter": "b",
        "text": "V6",
        "correct": false
      },
      {
        "letter": "c",
        "text": "V1",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V3",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_83.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong thuật toán A*, gọi h (n) là giá thực tế từ trạng thái n đến trạng thái đích, khi đó một hàm heuristic h(n) là chấp nhận được nếu điều kiện nào sau đây là đúng?",
    "options": [
      {
        "letter": "a",
        "text": "h(n) ≥ h* (n) với mọi nút n.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "h(n) ≤ h *(n) với mọi nút n.",
        "correct": true
      },
      {
        "letter": "c",
        "text": "h(n) ≤ h* (n) với một nút n nào đó.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "h(n) ≥ h* (n) với một nút n nào đó.",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Hàm heuristic của đỉnh nào vi phạm tính chấp nhận được?",
    "options": [
      {
        "letter": "a",
        "text": "C",
        "correct": false
      },
      {
        "letter": "b",
        "text": "A",
        "correct": false
      },
      {
        "letter": "c",
        "text": "B",
        "correct": false
      },
      {
        "letter": "d",
        "text": "D",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_84.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Nếu áp dụng giải thuật A* để tìm đường đi từ đỉnh S đến đỉnh G, hàm đánh giá f(C) bằng bao nhiêu?  6+1 + 4(đỉnh c) vì lấy trọng số gn nhỏ nhất",
    "options": [
      {
        "letter": "a",
        "text": "f(C) = 7",
        "correct": false
      },
      {
        "letter": "b",
        "text": "f(C) = 13",
        "correct": false
      },
      {
        "letter": "c",
        "text": "f(C) = 4",
        "correct": false
      },
      {
        "letter": "d",
        "text": "f(C) = 11",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_85.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Để tìm đường đi ngắn nhất từ đỉnh S đến đỉnh G của một đồ thị, nếu cây tìm kiếm của thuật toán leo đồi được xây dựng như sau, trong đó ký hiệu h là hàm heuristic ước lượng khoảng cách đến đích thì nút nào của cây bị SAI?",
    "options": [
      {
        "letter": "a",
        "text": "B          c. D",
        "correct": false
      },
      {
        "letter": "b",
        "text": "A          d. C h=6 > h=5",
        "correct": true
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_86.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Thuật toán tìm kiếm tham lam (greedy search) tìm được đường đi nào để đi từ đỉnh S đến đỉnh G?",
    "options": [
      {
        "letter": "a",
        "text": "S – A – D - G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – A – C - G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – D - G",
        "correct": true
      },
      {
        "letter": "d",
        "text": "S – B – G",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_87.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong thuật toán weighted A*, hàm đánh giá f(n) = g(n) + W*h(n). Nếu W = ∞, thì thuật toán weighted A* trở thành thuật toán nào sau đây?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán tìm kiếm với giá cực tiểu (UCS)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán tìm kiếm theo chiều rộng",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thuật toán tìm kiếm tham lam (greedy best first search)",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Thuật toán tìm kiếm theo chiều sâu",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán leo đồi (hill-climbing search) để tìm giá trị lớn nhất cho hàm số f(x) có đồ thị như sau với x nguyên và 0 ≤ x ≤ 30, phát biểu nào sau đây là đúng?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán luôn tìm được giá trị lớn nhất của hàm số f(x).",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán không tìm được giá trị lớn nhất của hàm số f(x).",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Không gian tìm kiếm tối đa của thuật toán là 0 ≤ x ≤ 30.",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Thuật toán tìm được giá trị lớn nhất của hàm f(x) phụ thuộc vào điểm xuất phát ban đầu.",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_88.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "bài toán thõa mãn ràng buộc (X,D,C), trong đó X = {x1, x2, x3}, D = {D1, D2, D3} với D1 = {1, 2, 3}, D2 = {1, 2, 3}, D3 = {2,3} và C = {x1 > x2, x2 ≠ x3, x2+ x3 > 4}. Phép gán nào sau đây là nghiệm của bài toán?",
    "options": [
      {
        "letter": "a",
        "text": "x1 = 3, x2 = 2, x3 = 3",
        "correct": true
      },
      {
        "letter": "b",
        "text": "x1 = 3, x2 = 1, x3 = 2",
        "correct": false
      },
      {
        "letter": "c",
        "text": "x1 = 3, x2 = 2, x3 = 2",
        "correct": false
      },
      {
        "letter": "d",
        "text": "x1 = 1, x2 = 2, x3 = 3",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán thõa mãn ràng buộc (X,D,C), trong đó X = {x1, x2, x3}, D = {D1, D2, D3} với D1 = {2,4,5,6}, D2 = {3,5,6,8}, D3 = {2,5,6,7} và C = {x1 = x2, x2 = x3}. Để đạt được thõa mãn ràng buộc trên cạnh x1-x21 cần xóa các giá trị nào?",
    "options": [
      {
        "letter": "a",
        "text": "Xóa {2,4} trong D1.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Xóa {3,8} trong D2.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xóa {5,6} trong D1.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Xóa {2} trong D1.",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán tô màu bản đồ như sau, trong đó vùng Vi có miền giá trị Di (i = 1, 2, 3,4). Nếu áp dụng thuật toán tìm kiếm quay lui kết hợp với kiểm tra tiến với V2 được gán là {R} thì các miền còn lại có giá trị như thế nào? V1= gb, v2=g, v3=r v4=b xét chưa đủ",
    "options": [
      {
        "letter": "a",
        "text": "D1 = {R,G,B}, D3 = {R,G}, D4 = {G,B}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "D1 = {G}, D3 = {G}, D4 = {G,B}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "D1 = {B}, D3 = {G}, D4 = {G,B}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "D1 = {G,B}, D3 = {G}, D4 = {G,B}",
        "correct": true
      }
    ],
    "correct": "d",
    "images": [
      "assets/img_89.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Nếu áp dụng giải thuật A* để tìm đường đi từ đỉnh S đến đỉnh G, hàm đánh giá f(E) bằng bao nhiêu? 6+7+ 4 = 17(sbe)",
    "options": [
      {
        "letter": "a",
        "text": "f(E) = 17",
        "correct": true
      },
      {
        "letter": "b",
        "text": "f(E) = 18",
        "correct": false
      },
      {
        "letter": "c",
        "text": "f(E) = 14",
        "correct": false
      },
      {
        "letter": "d",
        "text": "f(E) = 13",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_90.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Thuật toán nào trong các thuật toán sau đây KHÔNG phải là thuật toán tìm kiếm cục bộ?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán leo đồi (hill-climbing search)",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Thuật toán mô phỏng luyện kim (simulated annealing)",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thuật toán di truyền (genetic algorithm)",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thuật toán tìm kiếm với giá cực tiểu (uniform cost search)",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong thuật toán A*, hàm f(n) = g(n) + h(n). Khẳng định nào sau đây là sai?",
    "options": [
      {
        "letter": "a",
        "text": "f(n) là ước lượng chi phí từ trạng thái đầu đến trạng thái đích đi qua trạng thái n.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "h(n) là ước lượng chi phí từ trạng thái n đến trạng thái đích.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "g(n) là chi phí thực tế từ trạng thái đầu đến trạng thái n.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "h(n) là chi phí thực tế từ trạng thái n đến trạng thái đích.",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Hàm heuristic của đỉnh nào vi phạm tính đồng nhất?",
    "options": [
      {
        "letter": "a",
        "text": "A",
        "correct": false
      },
      {
        "letter": "b",
        "text": "B vì B>7",
        "correct": true
      },
      {
        "letter": "c",
        "text": "D",
        "correct": false
      },
      {
        "letter": "d",
        "text": "C",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_91.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Để tìm đường đi ngắn nhất từ đỉnh S đến đỉnh G của một đồ thị, nếu cây tìm kiếm của thuật toán tìm kiếm Beam với k =2 được xây dựng như sau, trong đó ký hiệu h là hàm heuristic ước lượng khoảng cách đến đích thì những nút nào tiếp theo của cây sẽ được chọn để mở rộng cây? ???",
    "options": [
      {
        "letter": "a",
        "text": "{C,H}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{C,E}",
        "correct": true
      },
      {
        "letter": "c",
        "text": "{F,H}",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{E,F}",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_92.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong giải thuật di truyền, giả sử có 2 cá thể với gen được biểu diễn bởi dãy bit nhị phân như sau: x = 10011, y = 01010. Nếu lai ghép cá thể x và y với điểm cắt c = 2, thì giải thuật sinh ra một cá thể con z có gen như thế nào? 10+ 010",
    "options": [
      {
        "letter": "a",
        "text": "z = 10010",
        "correct": true
      },
      {
        "letter": "b",
        "text": "z = 01110",
        "correct": false
      },
      {
        "letter": "c",
        "text": "z = 1001",
        "correct": false
      },
      {
        "letter": "d",
        "text": "z = 10011",
        "correct": false
      }
    ],
    "correct": "a"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Nếu áp dụng thuật toán leo đồi cho hàm số với đồ thị sau, phát biểu nào sau đây là đúng?",
    "options": [
      {
        "letter": "a",
        "text": "Thuật toán tìm được giá trị của hàm f(x) phụ thuộc vào điểm xuất phát.",
        "correct": true
      },
      {
        "letter": "b",
        "text": "Thuật toán luôn tìm được giá trị lớn nhất của hàm f(x) tại đỉnh A.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Thuật toán chỉ tìm được giá trị hàm f(x) tại đỉnh B.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Thuật toán chỉ tìm được giá trị hàm f(x) tại đỉnh C.",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_93.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán tô màu có bản đồ (V,D,C) được biểu diễn bằng đồ thị sau, trong đó V = {V1,V2,V3}, D = {D1,D2,D3} và C = {V1 ≠ V2, V2 ≠ V3, V3 ≠ V1}. Nếu áp dụng thuật toán min-conflicts với phép gán current = {G,R,G} thì những biến nào là biến xung đột?",
    "options": [
      {
        "letter": "a",
        "text": "Không có biến xung đột",
        "correct": false
      },
      {
        "letter": "b",
        "text": "V1 và V3",
        "correct": true
      },
      {
        "letter": "c",
        "text": "V2 và V3",
        "correct": false
      },
      {
        "letter": "d",
        "text": "V1 và V2",
        "correct": false
      }
    ],
    "correct": "b",
    "images": [
      "assets/img_94.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Ở vòng lặp thứ 2, cấu trúc \"frontier\" của thuật toán A* gồm những đỉnh nào?",
    "options": [
      {
        "letter": "a",
        "text": "{(A,14),(B,15),(C,11),(G,12)}",
        "correct": true
      },
      {
        "letter": "b",
        "text": "{(A,14),(B,15),(D,12)}  thiếu GC",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{(B,15),(C,14),(D,12)}  thiếu G",
        "correct": false
      },
      {
        "letter": "d",
        "text": "{(A,14),(D,12),(G,15)} thiếu C",
        "correct": false
      }
    ],
    "correct": "a",
    "images": [
      "assets/img_95.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Trong mỗi vòng lặp của thuật toán min-conflicts, một biến được chọn là:",
    "options": [
      {
        "letter": "a",
        "text": "Biến ngẫu nhiên trong tập các biến.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Biến có giá trị đang được gán có xung đột nhiều nhất.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Biến xung đột với các biến khác.",
        "correct": true
      },
      {
        "letter": "d",
        "text": "Biến không có xung đột với các biến khác.",
        "correct": false
      }
    ],
    "correct": "c"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho bài toán thõa mãn ràng buộc (X,D,C), trong đó X = {x1, x2, x3}, D = {D1, D2, D3} với D1 = {2,4,5,7}, D2 = {3,5,6,8}, D3 = {1,5,6,7} và C = {x1 = x2, x2 = x3}. Để đạt được thõa mãn ràng buộc trên cạnh x1-x3, cần xóa các giá trị nào?",
    "options": [
      {
        "letter": "a",
        "text": "Xóa {5,7} trong D1.",
        "correct": false
      },
      {
        "letter": "b",
        "text": "Xóa {2} trong D1.",
        "correct": false
      },
      {
        "letter": "c",
        "text": "Xóa {1,6} trong D3.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "Xóa {2,4} trong D1.",
        "correct": true
      }
    ],
    "correct": "d"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Một bài toán thõa mãn ràng buộc được định nghĩa gồm bộ 3 (X,D,C), phát biểu nào sau đây là SAI?",
    "options": [
      {
        "letter": "a",
        "text": "X = {X1, X2, ..., Xn} là một tập hữu hạn các biến",
        "correct": false
      },
      {
        "letter": "b",
        "text": "C = {C1 ¹ C2 ¹ ... ¹ Cn} là tập các ràng buộc của các biến.",
        "correct": true
      },
      {
        "letter": "c",
        "text": "D = {D1, D2, ..., Dn} là một tập hữu hạn miền giá trị của các biến với Di là miền giá trị của biến Xi.",
        "correct": false
      },
      {
        "letter": "d",
        "text": "C = {C1, C2, . . . ,Ct} là tập các ràng buộc của các biến.",
        "correct": false
      }
    ],
    "correct": "b"
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Ở vòng lặp thứ 2, cấu trúc \"explored\" của thuật toán A* gồm những đỉnh nào? Tổng chi phí thấp nhất gn+hn =",
    "options": [
      {
        "letter": "a",
        "text": "{S,A,B}",
        "correct": false
      },
      {
        "letter": "b",
        "text": "{S,A}",
        "correct": false
      },
      {
        "letter": "c",
        "text": "{S,D}",
        "correct": true
      },
      {
        "letter": "d",
        "text": "{S,B}",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_96.png"
    ]
  },
  {
    "chapter": "Trắc nghiệm tổng hợp",
    "question": "Cho đồ thị sau với hàm đánh giá heuristic của các đỉnh đến đỉnh G được ghi trên các đỉnh và giá để di chuyển giữa 2 đỉnh được ghi trên các cạnh. Thuật toán tìm kiếm leo đồi (hill-climbing) tìm được đường đi nào từ đỉnh S đến đỉnh G?",
    "options": [
      {
        "letter": "a",
        "text": "S – B – C - E - G",
        "correct": false
      },
      {
        "letter": "b",
        "text": "S – A – D - G",
        "correct": false
      },
      {
        "letter": "c",
        "text": "S – A – C – E - G",
        "correct": true
      },
      {
        "letter": "d",
        "text": "S – B – E – G",
        "correct": false
      }
    ],
    "correct": "c",
    "images": [
      "assets/img_97.png"
    ]
  }
];
