TESTS=`find test -type f -name '*.test.js'`
REPORTER=spec

pre-test:
	# 始终用 default 配置跑测试
	@cp config.js config.js.bak 2>/dev/null
	@cp config.default.js config.js

test: pre-test
	@./node_modules/.bin/mocha $(TESTS) --reporter $(REPORTER)



cov: pre-test
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- $(TESTS)\
		--reporter $(REPORTER)



.PHONY: test cov
