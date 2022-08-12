<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220812071747 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cat_mort DROP FOREIGN KEY FK_FCD1253FE6ADA943');
        $this->addSql('DROP INDEX IDX_FCD1253FE6ADA943 ON cat_mort');
        $this->addSql('ALTER TABLE cat_mort DROP cat_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cat_mort ADD cat_id INT NOT NULL');
        $this->addSql('ALTER TABLE cat_mort ADD CONSTRAINT FK_FCD1253FE6ADA943 FOREIGN KEY (cat_id) REFERENCES mort (id)');
        $this->addSql('CREATE INDEX IDX_FCD1253FE6ADA943 ON cat_mort (cat_id)');
    }
}
