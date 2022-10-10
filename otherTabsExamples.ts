// <!-- <TabItem value="go" label="Go">

// ```go title="countries-states-cities.go"
// url:="https://api.countrystatecity.in/v1/countries"

// client := &http.Client{}
// req, _ := http.NewRequest("GET", url, nil)
// req.Header.Add("X-CSCAPI-KEY", "API_KEY")
// res, _ := client.Do(req)
// defer res.Body.Close()

// bytes ,err := ioutil.ReadAll(res.Body)
// if err != nil {
//   fmt.Println(err.Error())
// }
// fmt.Println(string(bytes))
// ```

//   </TabItem>

// <TabItem value="dart" label="Dart">

// ```dart title="countries-states-cities.dart"
// var headers = {
//   'X-CSCAPI-KEY': 'API_KEY'
// };

// var request = http.Request('GET', Uri.parse('https://api.countrystatecity.in/v1/countries'));

// request.headers.addAll(headers);

// http.StreamedResponse response = await request.send();

// if (response.statusCode == 200) {
//   print(await response.stream.bytesToString());
// } else {
//   print(response.reasonPhrase);
// }
// ```

//   </TabItem>

// <!-- <TabItem value="php" label="PHP">

// ```php title="countries-states-cities.php"
// <?php

// $curl = curl_init();

// curl_setopt_array($curl, array(
//   CURLOPT_URL => 'https://api.countrystatecity.in/v1/countries',
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_HTTPHEADER => array(
//     'X-CSCAPI-KEY: API_KEY'
//   ),
// ));

// $response = curl_exec($curl);

// curl_close($curl);
// echo $response;
// ```

//   </TabItem> -->

// <TabItem value="axios" label="Axios">

// ```jsx title="countries-states-cities.js"
// var axios = require("axios");

// var config = {
//   method: "get",
//   url: "https://api.countrystatecity.in/v1/countries",
//   headers: {
//     "X-CSCAPI-KEY": "API_KEY",
//   },
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// ```

//   </TabItem>

// <TabItem value="py" label="Python">

// ```py title="countries-states-cities.py"
// import requests

// url = "https://api.countrystatecity.in/v1/countries"

// headers = {
//   'X-CSCAPI-KEY': 'API_KEY'
// }

// response = requests.request("GET", url, headers=headers)

// print(response.text)
// ```

//   </TabItem>
