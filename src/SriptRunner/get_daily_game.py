'''
Created on Nov 6, 2017

@author: song
'''
# !/usr/bin/env python
import argparse
import src.DataBuild.Game.GameInfo.GameInfo

parser = argparse.ArgumentParser()
parser.add_argument("time", help="set the time to get list the of the daily games")

args = parser.parse_args()
src.DataBuild.Game.GameInfo.GameInfo.get_daily_game_id()
print args.time

