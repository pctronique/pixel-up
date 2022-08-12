<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
use PHPUnit\Framework\Error\Notice;
use PHPUnit\Framework\Error\Warning;
use PHPUnit\Framework\TestCase;

class YourShinyNoticeTest extends TestCase
{

    public function test_it_emits_a_warning()
    {
        $this->expectException(Warning::class);

        file_get_contents('/nonexistent_file'); // This will emit a PHP Warning, so test passes
    }


    public function test_it_emits_a_notice()
    {
        $this->expectException(Notice::class);

        $now = new \DateTime();
        $now->whatever; // Notice gets emitted here, so the test will pass
    }
}
