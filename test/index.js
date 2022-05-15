/* globals before, describe, it */

const gh = require('..');

test('test', () => {
  expect(gh('https://git.code.tencent.com/alanhe/tgit-url-to-object.git')).toEqual({
    "apiHost": "git.code.tencent.com",
    "api_url": "https://git.code.tencent.com/alanhe/tgit-url-to-object/-",
    "branch": "master",
    "clone_url": "https://git.code.tencent.com/alanhe/tgit-url-to-object",
    "host": "git.code.tencent.com",
    "https_url": "https://git.code.tencent.com/alanhe/tgit-url-to-object",
    "repo": "tgit-url-to-object",
    "user": "alanhe",
    "zip_url": "https://git.code.tencent.com/alanhe/tgit-url-to-object/-/repository/archive.zip"
  });
});
