// C3.js
let chart = c3.generate({
    bindto: '#chart', // HTML 元素綁定
    data: {
        type: "pie",
        columns: [
        ['Louvre 雙人床架', 2],
        ['Antony 雙人床架', 3],
        ['Anty 雙人床架', 2],
        ['Charles 雙人床架', 3],
        ],
        colors:{
            "Louvre 雙人床架":"#301E5F",
            "Antony 雙人床架":"#5434A7",
            "Anty 雙人床架": "#9D7FEA",
            "Charles 雙人床架": "#6A33F8",
        }
    },
});