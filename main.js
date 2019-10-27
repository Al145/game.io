window.onload = function () {
    let tdArr = document.getElementsByTagName("td");
    let table = document.getElementsByTagName("table")[0];
    for (i = 0; i <= tdArr.length - 1; i++) {
        tdArr[i].addEventListener('click', function () {
            let vertX = table.rows.length;
            let horzY = table.rows[0].cells.length;
            let x = this.parentElement.rowIndex;
            let y = this.cellIndex;
            let lear = this.innerHTML;


            table.rows[x].cells[y].setAttribute("class", "checked");
            table.rows[x].cells[y].innerHTML = "";

            if (1 <= x) {
                setTimeout(function () {
                    if ((table.rows[x - 1].cells[y].innerHTML == lear) && (!(table.rows[x - 1].cells[y].classList.contains('checked')))) {
                        table.rows[x - 1].cells[y].click();
                    }
                }, 50)
            }
            if (x <= vertX - 2) {
                setTimeout(function () {
                    if ((table.rows[x + 1].cells[y].innerHTML == lear) && (!(table.rows[x + 1].cells[y].classList.contains('checked')))) {
                        table.rows[x + 1].cells[y].click();
                    }
                }, 50)
            }
            if (1 <= y) {
                setTimeout(function () {
                    if ((table.rows[x].cells[y - 1].innerHTML == lear) && (!(table.rows[x].cells[y - 1].classList.contains('checked')))) {
                        table.rows[x].cells[y - 1].click();
                    }
                }, 50)
            }
            if (y <= horzY - 2) {
                setTimeout(function () {
                    if ((table.rows[x].cells[y + 1].innerHTML == lear) && (!(table.rows[x].cells[y + 1].classList.contains('checked')))) {
                        table.rows[x].cells[y + 1].click()

                    }
                }, 50)
            }

        }, false);
    }

document.querySelector(".reset").addEventListener('click', fieldFill);

    function fieldFill() {
        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1)
            rand = Math.round(rand);
            return rand;
        }

        let newTd = document.getElementsByTagName("td");
        for (i = 0; i <= newTd.length - 1; i++) {
            newTd[i].classList.remove("checked");
            switch (randomInteger(1, 4)) {
                case 1:
                    newTd[i].innerHTML = "&spades;";
                    break;
                case 2:
                    newTd[i].innerHTML = "&clubs;";
                    break;
                case 3:
                    newTd[i].innerHTML = "&#9825;";
                    break;
                case 4:
                    newTd[i].innerHTML = "&#9826;";
                    break;
            }
        }
    }
}

