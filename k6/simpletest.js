import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get(__ENV.LOADTEST_TARGET );
  sleep(1);
}