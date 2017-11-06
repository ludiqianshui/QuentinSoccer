'''
Created on Nov 6, 2017

@author: song
'''
# !/usr/bin/env python
import sys
print sys.path

import argparse
import src.DataBuild.Game.GameInfo.GameInfo

parser = argparse.ArgumentParser()
parser.add_argument("time_1", help="set the time to get list the of the daily games")
parser.add_argument("para_2", help="para_2")

args = parser.parse_args()
print args.time_1

src.DataBuild.Game.GameInfo.GameInfo.get_daily_game_id()
print args.para_2

