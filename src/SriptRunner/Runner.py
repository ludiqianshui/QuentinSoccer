"""
    This module provides script runner
"""
# !/usr/bin/env python
import threading
import time

class Runner(threading.Thread):

    def run(name):
        print("{} started!".format(name))
        # search game schedule
        print("{} finished!".format(name))

    if __name__ == '__main__':
        vl = 1
        while (vl != 0):
            mythread = run("bet search")
            time.sleep(2)
