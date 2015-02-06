'use strict';

/**
 * Right now assumes 4/4 Time signature and all tracks of same length and only quarter notes or larger, whoops
 */
var MusicPlayer = function() {
	// songs
	var defaultMelody = [ [ 'C', 4, 1 ],[ 'A', 4, 1 ],[ 'B', 4, 1 ],[ 'E', 4, 1 ]];
	var defaultRhythm = [ [ 'G', 3, 2 ], null, [ 'D', 3, 2 ], null ];
	var builtInSongs = [{label:'Default Melody', value:defaultMelody},{label: 'Default Rhythm',value:defaultRhythm}];

	// instruments
	var defaultInstrument = 'piano';
	var _instrument = Synth.createInstrument(defaultInstrument);
	var instrumentOptions = [ {
		label : 'Piano',
		value : 'piano'
	}, {
		label : 'Acoustic',
		value : 'acoustic'
	}, {
		label : 'Organ',
		value : 'organ'
	}, {
		label : 'Electronic Dance Music',
		value : 'edm'
	} ];

	// more default configs
	var _debug = false;
	var _playing;
	var _bpm = 60;
	var _song = defaultRhythm;
	var _index = 0;

	var playNote = function() {
		debug('song: ' + _song);
		debug('index: ' + _index);
		var note = _song[_index]
		if (note) {
			makeSound(note[0], note[1], note[2]);
		}

		_index++;
		if (_index >= _song.length) {
			_index = 0;
		}
	}

	var play = function() {
		debug('player gonna play');
		this._playing = setInterval(playNote, _bpm / 60 * 1000);
	}

	var stop = function() {
		debug('player stop');
		window.clearInterval(this._playing);
	}

	var switchInstrument = function(newInstrument) {
		debug('new instrument: ' + newInstrument);
		_instrument = Synth.createInstrument(newInstrument);
	}

	var changeSong = function(newSong) {
		debug('changing song');
		_song = newSong;
	}

	function makeSound(note, interval, seconds) {
		debug('playing..');
		_instrument.play(note, interval, seconds);
	}

	function debug(message) {
		if (console && _debug && message) {
			console.log(message);
		}
	}

	function setDebug(flag) {
		_debug = flag;
	}

	return {
		play : play,
		stop : stop,
		instrumentOptions : instrumentOptions,
		switchInstrument : switchInstrument,
		setDebug : setDebug,
		changeSong : changeSong,
		builtInSongs : builtInSongs,
		defaultRhythm : defaultRhythm,
		defaultInstrument : defaultInstrument,
		defaultMelody : defaultMelody
	}
};