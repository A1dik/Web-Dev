from django.db import models


class Product (models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    category = models.CharField(max_length=255)
    is_active = models.BooleanField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'category': self.category,
            'is_active': self.is_active
        }


class Category(models.Model):
    name = models.CharField(max_length=255)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }