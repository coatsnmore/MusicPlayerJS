'use strict'
var MusicPlayer = function() {
	// songs
	var defaultSong = [{note:'G', interval:4, duration:2},{note:'D', interval:4, duration:2}];
	var modifiedDefaultSong = [{note:'G', interval:4, duration:1},{note:'A', interval:4, duration:2},,{note:'C', interval:4, duration:1}];
	var happyBirthdaySong = [{note:'C', interval:4, duration:.5},{note:'C', interval:4, duration:.5},{note:'D', interval:4, duration:1},{note:'C', interval:4, duration:1},{note:'F', interval:4, duration:1},{note:'E', interval:4, duration:2}];
	var builtInSongs = [{label:'Default A', value:defaultSong},{label: 'Default B',value:modifiedDefaultSong},{label:'Birthday', value:happyBirthdaySong}];
	
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
	var _song = defaultSong;
	var _index = 0;
	
	var playNote = function (){
		debug('song: ' + _song);
		debug('index: ' + _index);
		makeSound(_song[_index].note, _song[_index].interval, _song[_index].duration);
		_index++;
		if(_index  >= _song.length){
			_index = 0;
		}
	}
	
	var play = function() {
		debug('player gonna play');
		this._playing = setInterval(playNote, _bpm/60 * 1000);
	}

	var stop = function() {
		debug('player stop');
		window.clearInterval(this._playing);
	}

	var switchInstrument = function(newInstrument) {
		debug('new instrument: ' + newInstrument);
		_instrument = Synth.createInstrument(newInstrument);
	}
	
	var changeSong = function(newSong){
		debug('changing song');
		_song = newSong;
	}

	function makeSound(note, interval, seconds) {
		debug('playing..');
		_instrument.play(note, interval, seconds);
	}
	
	function debug(message){
		if (console && _debug && message){
			console.log(message);
		}
	}
	
	function setDebug(flag){
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
		defaultSong : defaultSong,
		defaultInstrument : defaultInstrument,
		modifiedDefaultSong : modifiedDefaultSong
	}
};