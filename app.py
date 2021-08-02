def is_fobonacci(num):
    """
    Check if a number is a Fibonacci number.
    """
    if num <= 1:
        return False
    a, b = 0, 1
    while b < num:
        a, b = b, a + b
    return b == num