import api from "../index";

class TranslateApi {
  getTranslate(params) {
    return api.get(`${process.env.VUE_APP_URL}/translate`, { params });
  }

  registrationLingvolive() {
    return api.get(`${process.env.VUE_APP_URL}/lingvolive/api/key`);
  }

  getTranslateLingvolive({ request }) {
    return api.post(
      `${process.env.VUE_APP_URL}/lingvolive/api/translate`,
      request
    );
  }
}

export default new TranslateApi();
//AAAAB3NzaC1yc2EAAAADAQABAAABgQDODsJNcVmYHWp1vrAfPxhR3KX1nzvfaYZBySdBAiPduWbbmfsRWO8mDFRKpdrLNKzFhH0niiOF6GpqYDyiwuIkASyZTfsCTQy14SCjsBFJ6C60I7Kg2GyfNbfUTM1muIpfLf+3HiM8MOp7Q/6n7vLICrWmY2NtLWNw66W2GpyfkqpDf9O8gSDUEC7LaJiey/7yKS+7rxQk2/IPFbXWycRQ+wEDv3leqK0JkGY7GKUdJhX6FQQRUbXptFso0i+GEPWu/MoIaoVfu4oI3S7Rj/5mWFR9D7cOJXtz+vXNq0jPSKVvGFPe9kdTONyveWYsTFzSo/uw4Nxeux+5ow2rpKubWez5wX4ckdxzVpRQBjTHLgv00/vtCstUHk5N3pvY/pHygOynr9NnJwMhUOaA9hvJZPeVY/JWyal+lZsrGcidunxFhxBphHXazPxkft4UpUg8Wb0ZZENwtlzKU1hMBtJI2yc6zJKkz2+BIOKVg94gxK7D3Mme8C21HBUa0i223Qs= jenkins@vps-38234.vps-default-host.net

//_uQS-3QXGvxhtcY9DiZf

//listen 5000;
//index index.html index.htm;
//server_name 185.233.38.46 www.185.233.38.46;
//location / {
//
//  root /var/www/freegen/dist;
//try_files $uri $uri/ =404;
//}
