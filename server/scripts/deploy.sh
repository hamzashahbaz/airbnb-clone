# !sh/bash
docker build -t hamzashahbaz/ts:latest -f ./Dockerfile-prod .
docker push hamzashahbaz/ts:latest
#scp -i ~/.ssh/hs docker-compose.prod.yml root@149.248.0.84:~/
#ssh deploy@149.248.0.84 -i ~/.ssh/hs "sudo docker pull hamzashahbaz/ts:latest && docker-compose -f docker-compose.prod.yml up"
#ssh deploy@149.248.0.84 -i ~/.ssh/hs "docker pull hamzashahbaz/ts:latest && docker tag hamzashahbaz/ts:latest dokku"
