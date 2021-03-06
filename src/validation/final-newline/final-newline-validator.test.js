import validate from './final-newline-validator';

/* eslint-disable camelcase */

test('should return true for an empty file (lf)', () => {
	const editorconfig = {
		end_of_line: 'lf',
		insert_final_newline: 'true'
	};
	const fileContent = '';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return true if final newline is set (lf)', () => {
	const editorconfig = {
		end_of_line: 'lf',
		insert_final_newline: 'true'
	};
	const fileContent = 'hello\nworld\n';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return false if final newline is not set (lf)', () => {
	const editorconfig = {
		end_of_line: 'lf',
		insert_final_newline: 'true'
	};
	const fileContent = 'hello\nworld';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('Wrong line endings or new final newline');
});

test('should return true for an empty file (cr)', () => {
	const editorconfig = {
		end_of_line: 'cr',
		insert_final_newline: 'true'
	};
	const fileContent = '';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return true if final newline is set (cr)', () => {
	const editorconfig = {
		end_of_line: 'cr',
		insert_final_newline: 'true'
	};
	const fileContent = 'hello\rworld\r';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return false if final newline is not set (cr)', () => {
	const editorconfig = {
		end_of_line: 'cr',
		insert_final_newline: 'true'
	};
	const fileContent = 'hello\rworld';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('Wrong line endings or new final newline');
});

test('should return true for an empty file (crlf)', () => {
	const editorconfig = {
		end_of_line: 'crlf',
		insert_final_newline: 'true'
	};
	const fileContent = '';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return true if final newline is set (crlf)', () => {
	const editorconfig = {
		end_of_line: 'crlf',
		insert_final_newline: 'true'
	};
	const fileContent = 'hello\r\nworld\r\n';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return false if final newline is not set (crlf)', () => {
	const editorconfig = {
		end_of_line: 'crlf',
		insert_final_newline: 'true'
	};
	const fileContent = 'hello\r\nworld';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('Wrong line endings or new final newline');
});

test('should return true if final newline is not in editorconfig(lf)', () => {
	const editorconfig = {
		end_of_line: 'lf'
	};
	const fileContent = 'hello\r\nworld';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return true if final newline is not in editorconfig(cr)', () => {
	const editorconfig = {
		end_of_line: 'cr'
	};
	const fileContent = 'hello\r\nworld';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

test('should return true if final newline is not in editorconfig(crlf)', () => {
	const editorconfig = {
		end_of_line: 'crlf'
	};
	const fileContent = 'hello\r\nworld';

	const result = validate(fileContent, editorconfig);

	expect(result).toEqual('');
});

/* eslint-enable camelcase */
