import scrapy


class CryptocurrecnycrawelSpider(scrapy.Spider):
    name = 'cryptocurrecnydata'
    start_urls = ['https://www.coingecko.com/']
    def parse(self, response):
        for item in response.xpath('/html/body/div[4]/div[4]/div[6]/div[1]/div/table/tbody/tr'):
            title = item.xpath('td[3]/div/div[2]/a/span[1]/text()').extract()[0]
            subtitle = item.xpath('td/div/div[2]/a/span[2]/text()').extract()[0]
            img = item.xpath('td[3]/div/div[1]/img/@src').extract()[0]
            price = item.xpath('td[5]/span/text()').extract()[0]
            h1_change = item.xpath('td[6]/span/text()').extract()[0]
            h24_change = item.xpath('td[7]/span/text()').extract()[0]
            d7_change = item.xpath('td[8]/span/text()').extract()[0]
            yield {
                    'title':title,
                    'subtitle':subtitle,
                    'image':img,
                    'price':price,
                    'h1_change':h1_change,
                    '24h_change':h24_change,
                    '7day_change':d7_change,                    
                  }
            
            