# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class CryptorealtimescraperItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass



class CryptodataItem(scrapy.Item):
    # define the fields for your item here like:
    title = scrapy.Field()
    
    
class NFTdataItem(scrapy.Item):
    # define the fields for your item here like:
    title = scrapy.Field()
