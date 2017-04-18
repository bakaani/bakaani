<?php

namespace App\Services;

use GuzzleHttp\Client;

class RemoteAnimeSource
{
    protected $http;

    public function __construct(Client $http)
    {
        $this->http = $http;
    }

    public function get($id)
    {
        $response = $this->http->request('GET', $this->getUrl($id));

        if ($response->getStatusCode() == 200) {
            return $this->getAttributes(
                $this->decodeReponse($response->getBody())
            );
        }
    }

    protected function getUrl($id)
    {
        //
    }

    protected function getAttributes($data)
    {
        //
    }

    protected function decodeReponse($response)
    {
        //
    }
}
