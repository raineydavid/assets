{
"ABOUT": "Women in Tech magazine featuring stories by women in tech groups"
,"MADE BY": "@raineydavid"
,"NOTES": "Import and the replacement must go in the same <foreignobject> that it refers to. So with this bot, the import is repeated twice, and there are scripts that refer to each svg <foreignobject>. Full readme at https://glitch.com/~magazine-cover"
,"origin" : ["#[#setAccount#]magazine#"]

,"setAccount": [
  "[account:women2]"
 ,"[account:womenwhocode]"
 ,"[account:womenandtech]"
]

,"setAccountTemp": [
  "[account:raineydavid]"
]

,"magazine_image" : "https://source.unsplash.com/random/768x1024?female,fashion,portrait"
,"magazine" : "{svg <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"768\" height=\"1024\" style=\"position: relative;\"><image x=\"0\" y=\"0\" width=\"768\" height=\"1024\" xlink:href=\"#magazine_image#\" />#magazine_title##byline##stories_left##stories_right#</svg>}"

,"magazine_title" : "<foreignObject x='0' y='0' width='768' height='1024'><p xmlns=\"http://www.w3.org/1999/xhtml\"><p style='position: absolute; left: 0px; top: 0px; width: 768px; line-height: 1; margin: 0px; padding: 0; text-align: center; font-size: 200px; font-weight: bold; color:rgba(255, 255, 255, 1.0); font-family:\"Amatic SC\"; text-shadow: 0 0 10px rgba(0, 0, 0, 1), 0 0 10px rgba(0, 0, 0, 1);'>BOT LIFE</p></p><style type='text/css'>@import url(https://fonts.googleapis.com/css?family=Amatic+SC);</style></foreignObject>"

,"byline" : "<foreignObject x='0' y='0' width='768' height='1024'><p xmlns=\"http://www.w3.org/1999/xhtml\"><p style='position: absolute; left: 0px; top: 200px; width: 768px; line-height: 1; margin: 0px; padding: 0; text-align: center; font-size: 36px; font-weight: bold; color:rgba(255, 255, 255, 1.0); font-family:\"Amatic SC\"; text-shadow: 0 0 5px rgba(0, 0, 0, 1), 0 0 5px rgba(0, 0, 0, 1); -webkit-text-stroke: 1px rgba(255, 255, 255, 1.0);' id=\"p_byline\">#js_import##js_byline#</p></p><style type='text/css'>@import url(https://fonts.googleapis.com/css?family=Amatic+SC);</style></foreignObject>"

,"stories_left" : "<foreignObject x='0' y='0' width='768' height='1024'><p xmlns=\"http://www.w3.org/1999/xhtml\"><p style='position: absolute; left: 20px; bottom: 40px; width: 344px; line-height: 1; margin: 0; padding: 0; text-align: left; font-size:40px; font-weight: bold; color:rgba(255, 255, 255, 1.0); font-family:\"Amatic SC\"; text-shadow: 0 0 5px rgba(0, 0, 0, 1), 0 0 5px rgba(0, 0, 0, 1); -webkit-text-stroke: 1px rgba(255, 255, 255, 1.0); word-wrap: break-word;' id=\"p_stories_left\">#js_import##js_stories_left#</p></p><style type='text/css'>@import url(https://fonts.googleapis.com/css?family=Amatic+SC);</style></foreignObject>"

,"stories_right" : "<foreignObject x='0' y='0' width='768' height='1024'><p xmlns=\"http://www.w3.org/1999/xhtml\"><p style='position: absolute; right: 20px; bottom: 40px; width: 344px; line-height: 1; margin: 0; padding: 0; text-align: right; font-size:40px; font-weight: bold; color:rgba(255, 255, 255, 1.0); font-family:\"Amatic SC\"; text-shadow: 0 0 5px rgba(0, 0, 0, 1), 0 0 5px rgba(0, 0, 0, 1); -webkit-text-stroke: 1px rgba(255, 255, 255, 1.0); word-wrap: break-word;' id=\"p_stories_right\">#js_import##js_stories_right#</p></p><style type='text/css'>@import url(https://fonts.googleapis.com/css?family=Amatic+SC);</style></foreignObject>"

,"js_import" : "<foreignObject><script type=\"text/javascript\" src=\"https://magazine-cover.glitch.me/#account#.js\"></script></foreignObject>"

,"js_byline" : "<foreignObject><script type=\"text/javascript\">document.getElementById('p_byline')[0].innerText= 'by @' + account</script></foreignObject>"

,"js_stories_left" : "<foreignObject><script type=\"text/javascript\">document.getElementById('p_stories_left')[0].innerText= stories_left;</script></foreignObject>"

,"js_stories_right" : "<foreignObject><script type=\"text/javascript\">document.getElementById('p_stories_right')[0].innerText= stories_right;</script></foreignObject>"

}
