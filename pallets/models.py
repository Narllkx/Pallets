from django.db import models


class Question(models.Model):
    text = models.CharField(max_length=255)
    date = models.DateTimeField('date published', null=True)

    def __str__(self):
        return self.text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    is_true = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.question}" \
               f" ответ --> {self.text} - {self.is_true}"
