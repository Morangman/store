<?php

namespace App\Console\Commands;

use App\Mail\NoticeMail;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class Reminder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle(): void
    {
        $remindeData = unserialize(file_get_contents(base_path()."/public/array.json"));

        foreach ($remindeData as $data) {
            if (Carbon::parse($data['date'])->isToday()) {
                Mail::to($data['email'])->send(new NoticeMail($data));
            }
        }
    }
}
