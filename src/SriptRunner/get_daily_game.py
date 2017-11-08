'''
Created on Nov 6, 2017

@author: song
'''
# !/usr/bin/env python
import sys
sys.path.append('/home/song/QProject/QuentinSoccer')
#print sys.path

import argparse
from src.DataBuild.Game import GameInfo

parser = argparse.ArgumentParser()
parser.add_argument("time_1", help="set the time to get list the of the daily games")

args = parser.parse_args()
gi = GameInfo.GameInfo()
gi.get_daily_game_id()

