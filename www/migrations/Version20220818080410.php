<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220818080410 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mort ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE mort ADD CONSTRAINT FK_E1E2D28EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_E1E2D28EA76ED395 ON mort (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE mort DROP FOREIGN KEY FK_E1E2D28EA76ED395');
        $this->addSql('DROP INDEX IDX_E1E2D28EA76ED395 ON mort');
        $this->addSql('ALTER TABLE mort DROP user_id');
    }
}
