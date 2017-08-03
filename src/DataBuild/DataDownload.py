"""
    This module provides data download feature
"""

import unittest
import requests

class DataDownload(object):
    """
        This module provides League related function
    """
    season_list = ["2007-2008","2008-2009","2009-2010","2010-2011","2011-2012","2012-2013","2013-2014","2014-2015","2015-2016","2016-2017"]
    league_id_list = [8,36,34,31,11]
    season_league_base_url = "http://zq.win007.com/jsData/matchResult/{}/s{}.js"
    data_base_path = '../../data/'
    season_league_path = 'season_league/'
    
    def __init__(self):
        return

    def __del__(self):
        return

    def download_season_league_data(self,league_id,season_id):
        download_url = self.season_league_base_url.format(season_id, league_id)
        js_reply = requests.get(download_url)
        if js_reply and js_reply.status_code == 200:
            js_content = js_reply.content
            js_file_path = self.data_base_path + self.season_league_path + season_id + "_" + str(league_id) + ".js"
            self.write_to_js_file(js_file_path, js_content)
        return js_file_path
    
    def download_season_league_all(self, league_list, season_list):
        for league_id in league_list:
            for season_id in season_list:
                self.download_season_league_data(league_id, season_id)
        return
    
    def write_to_js_file(self ,file_path ,file_content):
        with open(file_path,'w+') as js_file:
            js_file.write(file_content)
        return 

class Test(unittest.TestCase):

    def setUp(self):
        self.test_obj = DataDownload()

    def tearDown(self):
        self.test_obj = None
        return

    def test_get_win007_league_page(self):
        self.test_obj.download_season_league_data(8, "2015-2016")
        # self.test_obj.get_goldenbet()
    def test_download_season_league_all(self):
        league_id_list = self.test_obj.league_id_list
        season_list = self.test_obj.season_list
        self.test_obj.download_season_league_all(league_id_list, season_list)

        return True
