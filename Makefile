install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/startbrain-even.js

brain-calc:
	node bin/startbrain-calc.js

brain-gcd:
	node bin/startbrain-gcd.js

brain-progression:
	node bin/startbrain-progression.js

brain-prime:
	node bin/startbrain-prime.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .