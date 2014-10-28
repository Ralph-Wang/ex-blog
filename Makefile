TESTS=`find test -type f -name '*.test.js'`
REPORTER=spec

pre-test:
	@if [ ! -f config.js ];then \
		cp config.default.js config.js;fi
	@sed -i.bak s/true/false/ config.js

test: pre-test
	@./node_modules/.bin/mocha $(TESTS) --reporter $(REPORTER)



cov: pre-test
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- $(TESTS)\
		--reporter $(REPORTER)



.PHONY: test cov
