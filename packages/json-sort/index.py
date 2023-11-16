#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
将 json 文件按照 key 排序，写入文件(内容为 Unicode 编码)。
"""

import os
import json
from Utilities import get_path

# 读取文件


def read_file(path):
    with open(path, 'r') as f:
        return f.read()

# 写入文件


def write_file(path, content):
    with open(path, 'w') as f:
        f.write(content)


"""
读取目录下的所有 json 文件
path: 读取的目录路径
ignores: 指定忽略查询的文件名
"""


def read_dir(path, ignores=[]):
    files_path = []
    for root, dirs, files in os.walk(path):
        for file in files:
            # 忽略文件
            if file in ignores:
                continue
            if file.endswith('.json'):
                files_path.append(root + '/' + file)
    return files_path


read_dir_args_path = get_path('/src')
read_dir_args_ignores = ['.eslintrc-auto-import.json']
read_dir_response = read_dir(read_dir_args_path, read_dir_args_ignores)
print('读取目录下的所有 json 文件', read_dir_response)

# 读取文件内容
if len(read_dir_response) == 0:
    print('没有文件')
    exit(0)
for _ in read_dir_response:
    read_file_response = read_file(_)
    # 加载 json 为字典
    read_file_response_json = json.loads(read_file_response)
    ordered_dict = {}
    for key in sorted(read_file_response_json.keys()):
        ordered_dict[key] = read_file_response_json[key]
    ordered_json = json.dumps(ordered_dict, indent=2)
    write_file(_, ordered_json)
    print('写入文件成功', _)
