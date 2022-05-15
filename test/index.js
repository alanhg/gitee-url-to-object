/* globals before, describe, it */

const gh = require('..');

test('test', () => {
    expect(gh('https://gitee.com/mumu-osc/NiceFish')).toEqual({
        "apiHost": "gitee.com",
        "api_url": "https://gitee.com/mumu-osc/NiceFish/-",
        "branch": "master",
        "clone_url": "https://gitee.com/mumu-osc/NiceFish",
        "host": "gitee.com",
        "https_url": "https://gitee.com/mumu-osc/NiceFish",
        "repo": "NiceFish",
        "user": "mumu-osc",
        "zip_url": "https://gitee.com/mumu-osc/NiceFish/repository/archive/master.zip"
    });
});
