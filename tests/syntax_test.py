import os
import py_compile
import pytest

directories_to_check = ['backend', 'frontend']

@pytest.mark.parametrize("filepath", [
    os.path.join(root, file)
    for directory in directories_to_check
    for root, _, files in os.walk(directory)
    for file in files if file.endswith('.py')
])

def test_syntax(filepath):
    try:
        py_compile.compile(filepath, doraise=True)
    except py_compile.PyCompileError as e:
        pytest.fail(f"Syntax error in {filepath}: {e} 🤕")