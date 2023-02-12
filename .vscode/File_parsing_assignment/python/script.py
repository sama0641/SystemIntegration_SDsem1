import csv
with open ('../files/my_birds.csv','r') as csv_file:
    for row in csv.DictReader(csv_file): #DictReader() class can be used to read a CSV file as a dictionary.
        print(row)        
    csv_file.close()

       