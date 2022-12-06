var revapi2,
	tpj;
function revinit_revslider21() {
	jQuery(function () {
		tpj = jQuery;
		revapi2 = tpj("#rev_slider_2_1");
		if (revapi2 == undefined || revapi2.revolution == undefined) {
			revslider_showDoubleJqueryError("rev_slider_2_1");
		} else {
			revapi2.revolution({
				sliderLayout: "fullwidth",
				visibilityLevels: "1240,1024,778,480",
				gridwidth: "1300,1024,778,480",
				gridheight: "980,784,584,320",
				perspective: 600,
				perspectiveType: "global",
				editorheight: "980,784,584,320",
				responsiveLevels: "1240,1024,778,480",
				progressBar: { disableProgressBar: true },
				navigation: {
					onHoverStop: false
				},
				parallax: {
					levels: [5, 4, 3, 2, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
					type: "mouse",
					origo: "slidercenter",
					speed: 0
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid: true
				},
			});
		}

	});
} // End of RevInitScript
var once_revslider21 = false;
if (document.readyState === "loading") { document.addEventListener('readystatechange', function () { if ((document.readyState === "interactive" || document.readyState === "complete") && !once_revslider21) { once_revslider21 = true; revinit_revslider21(); } }); } else { once_revslider21 = true; revinit_revslider21(); }
