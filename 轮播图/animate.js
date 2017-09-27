			function animate (element, target, step) {
				if (element.timer) {
					clearInterval(element.timer);
				}
				element.timer=setInterval(function() {
					let leaper=element.offsetLeft;
					let steps = step || 10;
					if(leaper>target) {
						steps=-steps;
					}
					if (Math.abs(target-leaper) >= Math.abs(steps)) {
						leaper+=steps;
						element.style.left= leaper + 'px';
					} else {
						clearInterval(element.timer);
						element.style.left=target + 'px'
					}
				},20)
			}