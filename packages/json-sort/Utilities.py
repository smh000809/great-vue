import os


"""
获取项目根目录的绝对路径。
:param is_forward: 为 True 时，返回的路径末尾带有 /，否则不带。

:example:
get_pkg_path()      => /Users/shimenghao/Desktop/sass-legal-manage/
get_pkg_path(True)  => /Users/shimenghao/Desktop/sass-legal-manage/
get_pkg_path(False) => /Users/shimenghao/Desktop/sass-legal-manage
/Users/shimenghao/Desktop/sass-legal-manage
"""


def get_pkg_path(is_forward=True):
    current_file_path = os.path.abspath(__file__)
    project_root = os.path.dirname(current_file_path)
    for _ in range(2):
        project_root = os.path.dirname(project_root)
    return project_root + '/' if is_forward else project_root


"""
函数“get_path”返回包路径和输入路径的串联。

:param path: 参数“path”是表示文件或目录路径的字符串。默认值为“/”。
:return: 函数 `get_pkg_path(False)` 的结果和 `path` 参数的串联。

:example:
get_path()               => /Users/shimenghao/Desktop/sass-legal-manage/
get_path('')             => /Users/shimenghao/Desktop/sass-legal-manage
get_path('/src')         => /Users/shimenghao/Desktop/sass-legal-manage/src
get_path('/src/')        => /Users/shimenghao/Desktop/sass-legal-manage/src/
get_path('/src/main.ts') => /Users/shimenghao/Desktop/sass-legal-manage/src/main.ts
"""


def get_path(path='/'):
    return get_pkg_path(False) + path


__all__ = ['get_pkg_path', 'get_path']
