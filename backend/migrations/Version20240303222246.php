<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240303222246 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE gig DROP stripe_id, DROP stripe_price_id');
        $this->addSql('ALTER TABLE user DROP acct');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD acct VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE gig ADD stripe_id VARCHAR(255) NOT NULL, ADD stripe_price_id VARCHAR(255) NOT NULL');
    }
}
