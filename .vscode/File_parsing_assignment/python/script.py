import csv
from distutils import text_file
import xml.etree.cElementTree as ET
import yaml



with open ('../files/my_birds.csv','r') as csv_file:
    for row in csv.DictReader(csv_file): #DictReader() class can be used to read a CSV file as a dictionary.
        print(row)        
    csv_file.close()

with open('../files/my_birds.txt') as file:
    file_contents = file.read()
    print(file_contents)
   

#xml file
tree = ET.parse('../files/my_birds.xml')
root = tree.getroot()
print (root)
for book in root:
    print(book.attrib)

#yaml file
with open ("../files/my_birds.yaml","r") as s:
    y = yaml.safe_load(s)
    print: y ["imie"]
 


       





