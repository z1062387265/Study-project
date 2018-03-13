import axios from 'axios'

var url = 'http://10.129.4.182:8100/3D_MODEL/iot_get_layout/?config={%22type%22:%22layoutlist%22,%22layout_name_id%22:%22layout_name_id_a06db1d40e0f11e881cb005056b6166b%22,%22customer_id%22:%224%22,%22node_id%22:%224_79_QQH6Pq%22}'
export const Urls = axios.get(url);
