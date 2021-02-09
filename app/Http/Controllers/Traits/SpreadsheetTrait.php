<?php

declare(strict_types = 1);

namespace App\Http\Controllers\Traits;

use Google;
use App\Order;
use Google\Spreadsheet\DefaultServiceRequest;
use Google\Spreadsheet\ServiceRequestFactory;

/**
 * Trait SpreadsheetTrait
 *
 * @package App\Http\Controllers\Traits
 */
trait SpreadsheetTrait
{
    /**
     * @param \App\Order $order
     *
     * @return void
     */
    protected function setDataToSpreadsheet(Order $order): void
    {
        $secretData = storage_path('mobi-discount-c958e2268a84.json');

        putenv("GOOGLE_APPLICATION_CREDENTIALS=$secretData");

        $client = new Google\Client();

        try {
            $client->useApplicationDefaultCredentials();
            $client->setApplicationName("http://mobi-discount.com.ua/");
            $client->setScopes(['https://www.googleapis.com/auth/drive','https://spreadsheets.google.com/feeds']);
            if ($client->isAccessTokenExpired()) {
                $client->refreshTokenWithAssertion();
            }

            $accessToken = $client->fetchAccessTokenWithAssertion()["access_token"];
            ServiceRequestFactory::setInstance(
                new DefaultServiceRequest($accessToken)
            );

            $spreadsheet = (new Google\Spreadsheet\SpreadsheetService)
                ->getSpreadsheetFeed()
                ->getByTitle('http://mobi-discount.com.ua/');

            $worksheets = $spreadsheet->getWorksheetFeed()->getEntries();
            $worksheet = $worksheets[0];

            $listFeed = $worksheet->getListFeed();
            $listFeed->insert([
                'name' => "'".$order->getAttribute('name'),
                'phone' => "'".$order->getAttribute('phone'),
                'email' => "'".$order->getAttribute('email'),
                'date' => $order->getAttribute('created_at')
            ]);
        } catch (\Exception $e) {
            echo $e->getMessage() . ' ' . $e->getLine() . ' ' . $e->getFile() . ' ' . $e->getCode();
        }
    }
}
