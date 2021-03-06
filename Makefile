################################################################################
# Variables
################################################################################


# Add node_modules binaries to $PATH
export PATH := ./node_modules/.bin:$(PATH)


.DEFAULT:
info:
	@printf "\n"
	@printf "\033[0;1m Editorconfig-Checker\033[0m\n"
	@printf "\n"
	@printf " Available Targets\n"
	@printf " -----------------------------------------------------------------------------------------\n"
	@printf "\033[0;1m setup \033[0m \t\t set's up the project\n"
	@printf "\033[0;1m build \033[0m \t\t build's the project\n"
	@printf "\033[0;1m build-watch \033[0m \t\t watches the source files for changes and rebuilds on every change\n"
	@printf "\033[0;1m test \033[0m \t\t\t executes the tests\n"
	@printf "\033[0;1m test-coverage \033[0m \t shows the test coverage\n"
	@printf "\033[0;1m lint \033[0m \t\t\t lints all source files\n"
	@printf "\033[0;1m lint-self \033[0m \t\t executes the editorconfig-checker on itself\n"
	@printf "\033[0;1m clean \033[0m \t\t deletes the node_modules and dist folders\n"
	@printf "\n"


################################################################################
# Setup
################################################################################


check-requirements:
	@which yarn &>/dev/null || \
		(echo yarn is not installed: https://github.com/yarnpkg/yarn && false)

install: install-git-hook
	yarn install

install-git-hook:
	cd ./.git/hooks/ && ln -sf ../../Build/GitHooks/pre-commit .

setup: check-requirements install build


################################################################################
# Builds
################################################################################


build: clean-dist
	babel src --out-dir dist && chmod +x ./dist/index.js

build-watch:
	babel src --watch --out-dir dist


################################################################################
# Code Quality
################################################################################


test:
	jest src

test-coverage:
	jest --coverage src

test-coverage-publish:
	$(MAKE) test-coverage && ./node_modules/coveralls/bin/coveralls.js < ./coverage/lcov.info

test-watch:
	jest --watch src


lint: lint-self
	xo --ignore=Build/TestFiles/**/*.js

lint-self: build
	./dist/index.js --exclude-pattern './dist/**' --exclude-pattern './Build/TestFiles/**' -l


################################################################################
# Misc
################################################################################


publish: build
	npm publish

clean: clean-node_modules clean-dist

clean-node_modules:
	rm -Rf node_modules

clean-dist:
	rm -Rf dist/


# Make ALL targets phony targets
# (Rebuild every time)
.PHONY: *
