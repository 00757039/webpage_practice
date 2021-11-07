let num = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		var mn = 0;
		$(document).ready(function () {
			$("td").mouseenter(function () {
				check(this.id);
				document.getElementById("text").style.color = "red";
			});
			$("td").mouseleave(function () {
				document.getElementById("text").innerHTML = " ";
			});
		});
		function doClick(y, x) {
			let t = 10 * y + x;
			if (t < 10) t = "0" + t;
			let nl = $("#t");
			c(t)
		}
		function c(t) {
			let T = parseInt(t);
			let n = parseInt(T / 10 + T % 10 * 3);
			var T_n = $("#" + t);
			let T_d = T + 10;
			var down = $("#" + T_d);
			let T_l = T - 1;
			if (T_l < 10)
				var left = $("#0" + T_l);
			else
				var left = $("#" + T_l);
			let T_r = T + 1;
			if (T_r < 10)
				var right = $("#0" + T_r);
			else
				var right = $("#" + T_r);
			let T_u = T - 10;
			if (T_u < 10)
				var up = $("#0" + T_u);
			else
				var up = $("#" + T_u);
			if (down.html() == " ") {
				var ax = T_n.html();
				down.html(ax);
				T_n.html(" ");
				num[n + 3] = num[n];
				num[n] = 9;
			}
			else if (up.html() == " ") {
				var ax = T_n.html();
				up.html(ax);
				T_n.html(" ");
				num[n - 3] = num[n];
				num[n] = 9;
			}
			else if (right.html() == " ") {
				var ax = T_n.html();
				right.html(ax);
				T_n.html(" ");
				num[n + 1] = num[n];
				num[n] = 9;
			}
			else if (left.html() == " ") {
				var ax = T_n.html();
				left.html(ax);
				T_n.html(" ");
				num[n - 1] = num[n];
				num[n] = 9;
			}
			setTimeout(ca, 500);
		}
		function ca() {
			console.log(num);
			for (var i = 0; i < 9; i++) {
				let x = parseInt(num[i]);
				if (x < 10) x = x % 10;
				console.log(x);
				if (x != i + 1) return false;
            }
            document.getElementById("22").innerHTML = "<img src='cut09.png' width = '107px' height = '107px'>";
			window.alert("Congratulations!You win!");
		}
		function checknum(x) {
			for (var i = 0; i < 9; ++i) {
				if (num[i] == x) return true;
			}
			return false;
		}
		function restart() {
			var x;
			num = [0, 0, 0, 0, 0, 0, 0, 0, 0];
			for (var i = 0; i < 3; ++i) {
				for (var j = 0; j < 3; ++j) {
					do {
						x = Math.floor(1 + Math.random() * 9)
					} while (checknum(x));
					num[i * 3 + j] = x;
					let t = 10 * j + i;
					if (t < 10) t = "0" + t;
					if (x < 10) x = "0" + x;
					if (x < 9) document.getElementById(t).innerHTML = "<img src='cut" + x +".png' width = '107px' height = '107px'>";
					if (x == 9) document.getElementById(t).innerHTML = " ";
				}
			}
		}
		function gotoLastStep() {
			for (var i = 0; i < 3; ++i) {
				for (var j = 0; j < 3; ++j) {
					let x = i * 3 + j + 1;
					if (x < 10) x = "0" + x;
					if (x < 9) $("#" + i + j).html("<img src='cut" + x +".png' width = '107px' height = '107px'>");
					else $("#" + i + j).html(" ");
					num[x - 1] = x;
				}
			}
			num[7] = 9;
			num[8] = 8;
			$("#21").html(" ");
            $("#22").html("<img src='cut08.png' width = '107px' height = '107px'>");
			window.alert("WHY R U CHEATING?");
        }
        function start(){
            restart();
        }
		window.addEventListener("load", start, false);