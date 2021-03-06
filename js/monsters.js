/*!
 * Vilify monsters.js
 */

(function(window) {
	/**
	 * Monster object
	 * Store all the data associated with one monster
	 */
	var Monster = function() {
		this.initialize();
	}

	var p = Monster.prototype = new createjs.Container();
	Monster.prototype.Container_initialize = p.initialize;

	Monster.prototype.initialize = function() {
		this.Container_initialize();

		// Monster data
		this.type = null;

		// Monster image
		var image = new createjs.Shape();
		image.graphics.beginFill("#d61500").drawRect(960/2 - 50, 530, 70, 100);
		this.addChild(image);
	}

	window.Monster = Monster;
})(window);
