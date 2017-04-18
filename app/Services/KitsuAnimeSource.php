<?php

namespace App\Services;

use GuzzleHttp\Client;

class KitsuAnimeSource extends RemoteAnimeSource
{
    protected function getUrl($id)
    {
       return 'https://kitsu.io/api/edge/anime/' . $id . '?include=genres';
    }

    protected function getAttributes($data)
    {
        $attributes = $data['data']['attributes'];
        $title = $attributes['titles']['en'];
        $synonym_titles = $attributes['abbreviatedTitles'];
        $published_at = $attributes['startDate'] ? \Carbon\Carbon::parse($attributes['startDate']) : null;
        $show_type = $attributes['subtype'];
        $image = $attributes['posterImage']['large'];
        $plot = $attributes['synopsis'];
        $genres = $this->getGenres($data);

        return compact('title', 'plot', 'show_type', 'image', 'published_at', 'synonym_titles', 'genres');
    }

    protected function decodeReponse($response)
    {
        return json_decode($response, true);
    }

    private function getGenres($data)
    {
        $relationships = $data['data']['relationships']['genres']['data'];
        $genreIds = array_map(function($genre) {
            return $genre['id'];
        }, $relationships);

        $filters = array_filter($data['included'], function($relation) use($genreIds) {
            return $relation['type'] == 'genres' && in_array($relation['id'], $genreIds);
        });

        return array_map(function($genre) {
            return $genre['attributes']['name'];
        }, $filters);
    }
}
