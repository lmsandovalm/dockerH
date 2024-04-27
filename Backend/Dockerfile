FROM python:3.10

#ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y libpq-dev git wget

RUN wget -O /usr/local/bin/wait-for-it.sh \
    https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /usr/local/bin/wait-for-it.sh

WORKDIR /app

RUN git clone -b Docker --single-branch https://github.com/lmsandovalm/backend_final1.git .

RUN git pull

RUN pip install -r requirements.txt
RUN pip install Pillow

EXPOSE 8000

CMD ["sh", "-c", "/usr/local/bin/wait-for-it.sh db2:5432 -- python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]

