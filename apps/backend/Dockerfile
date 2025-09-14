FROM python:3.12-slim

WORKDIR /app
COPY apps/backend/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -U pip && \
    pip install --no-cache-dir -r /app/requirements.txt

# 앱 코드
COPY apps/backend/app /app/app

EXPOSE 8000
CMD ["bash","-lc","uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload"]
