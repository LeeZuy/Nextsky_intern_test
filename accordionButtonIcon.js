document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach(button => {
        const icon = button.querySelector(".icon-toggle");

        // Khởi tạo icon dựa trên trạng thái ban đầu
        if (!button.classList.contains("collapsed")) {
            icon.textContent = "-";
        }

        button.addEventListener("click", function () {
            setTimeout(() => {
                if (button.classList.contains("collapsed")) {
                    icon.textContent = "+";
                } else {
                    icon.textContent = "-";
                }
            }, 200); // Delay để chờ class "collapsed" cập nhật
        });
    });
});