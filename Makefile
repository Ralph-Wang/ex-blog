TESTS=`find test -type f -name '*.test.js'`


test:
	@./node_modules/.bin/mocha $(TESTS)



cov:
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha $(TESTS)



.PHONY: test cov
