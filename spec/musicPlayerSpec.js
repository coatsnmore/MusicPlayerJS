describe('MusicPlayer', function () {
    it('default the instrument to piano', function () {
    	var mp = new MusicPlayer();
        expect(mp.defaultInstrument).toEqual('piano');
    });
});