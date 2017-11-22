
describe("---TestingOfDenemeJS---", function(){
	var assert = require('assert');
	var Okul = require('/home/mmhnlhn/Desktop/okul.js');
	var nesne = new Okul();
	var parametrekontrol = nesne.parametrelerDogruMu;
	
    before(function(){       
        // do something before test suite execution
        // no matter if there are failed cases    
	
    });
	
    after(function(){ 
        // do something after test suite execution is finished
        // no matter if there are failed cases
	
	});
    
    beforeEach(function(){
        // do something before test case execution
        // no matter if there are failed cases
    });
 
    afterEach(function(){
 
        // do something after test case execution is finished
        // no matter if there are failed cases
 
    });
  
    it("TestHataliArguman", function(){
        assert.equal("hatali arguman girisi", parametrekontrol("warol"));
    });
 
    it("TestFazlaArguman", function(){
        assert.equal("fazla arguman girisi", parametrekontrol(3,5));       
    });
 
    it("TestDevreAraligi", function(){
		assert.equal("devre araligi 1-4 arasinda olmali", parametrekontrol(5)); 
    });
  
});
